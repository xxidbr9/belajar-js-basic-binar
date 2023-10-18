const express = require("express");
const knex = require("knex");
const knexfile = require("./knexfile");
const { v4 } = require("uuid");
const app = express();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const db = knex(knexfile["development"]);

// kunci jwt
const JWT_KEY = "binar-jwt-key";

app.use(bodyParser({ extended: true }));
app.use(cors({ origin: "*" }));

// register
app.post("/api/v1/user/register", async (req, res) => {
  /* 
    email
    password
    full_name
  */
  const { email, password, fullname } = req.body;
  const id = v4();
  const genSalt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, genSalt);

  // insert ke table user untuk menyimpan email dan password
  await db("users").insert({
    id,
    email,
    hash_password: hashPassword
  });

  // insert ke profile untuk menyimpan informasi tambahan dari user
  await db("user_profiles").insert({ user_id: id, full_name: fullname });

  // success
  res.status(201).json({
    message: "success created user",
    data: {
      user: {
        id,
        email,
        fullname
      }
    }
  });
});

app.post("/api/v1/user/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await db("users")
    .first("id", "email", "hash_password")
    .where("email", email);

  if (!user) return res.status(404).json({ error: "email tidak terdaftar" });

  const isSameUser = await bcrypt.compare(password, user.hash_password);
  if (!isSameUser) {
    return res.status(404).json({ error: "email or password wrong" });
  }

  // mengisi data di dalam jwt/access token
  const userJwt = { user: { id: user.id, email: user.email } };
  const idRefresh = { id: user.id };

  const access_token = jwt.sign(userJwt, JWT_KEY, {
    issuer: "binar",
    expiresIn: "10m"
  });

  const refesh_token = jwt.sign(idRefresh, JWT_KEY, {
    issuer: "binar",
    expiresIn: "200d"
  });

  return res.status(200).json({
    message: "success login",
    data: {
      access_token,
      refesh_token
    }
  });
});

// middleware
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  // split: Bearer <token>
  const accessToken = token.split(" ")[1];

  const infoJwt = jwt.verify(accessToken, JWT_KEY);

  // check token sudah expired
  // kalau sudah expired maka lempar error "token expired"
  // ini di tambah ke req
  req.local_user = infoJwt.user;
  next();
};

const profileController = async (req, res) => {
  const userJwt = req.local_user; // access req dari middleware

  const user = await db("user_profiles")
    .first("full_name")
    .where("user_id", userJwt.id);
  return res.status(200).json({
    message: "success get user profile",
    data: {
      user: {
        id: userJwt.id,
        email: userJwt.email,
        fullname: user.full_name
      }
    }
  });
};
app.get("/api/v1/user/profile", authMiddleware, profileController);

// refresh ini hanya berjalan untuk mengambil access_token baru
app.post("/api/v1/auth/refresh", async (req, res) => {
  const refreshToken = req.body.refresh_token;
  
  // ambil info user dari database
  const infoJwtRefresh = jwt.verify(refreshToken, JWT_KEY);
  const user = await db("users")
    .first("id", "email", "hash_password")
    .where("id", infoJwtRefresh.id);

  const userJwt = { user: { id: user.id, email: user.id } };
  const idRefresh = { id: user.id };

  const access_token = jwt.sign(userJwt, JWT_KEY, {
    issuer: "binar",
    expiresIn: "10m"
  });

  const refesh_token = jwt.sign(idRefresh, JWT_KEY, {
    issuer: "binar",
    expiresIn: "200d"
  });

  return res.status(200).json({
    message: "refresh success",
    data: {
      access_token,
      refesh_token
    }
  });
});

app.listen(9000, () => {
  console.log("http://localhost:9000");
});
