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
app.use(cors({ origin: ["*"] }));
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
  await db("users").insert({
    id,
    email,
    hash_password: hashPassword
  });
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

  const isSameUser = await bcrypt.compare(password, user.hash_password);
  if (!isSameUser) {
    return res.status(403).json({ error: "email or password wrong" });
  }

  const userJwt = { user: { id: user.id, email: user.email } };
  const access_token = jwt.sign(userJwt, JWT_KEY, {
    issuer: "binar",
    expiresIn: "10h"
  });

  return res.status(200).json({
    message: "success login",
    data: {
      access_token
    }
  });
});

// middleware
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const accessToken = token.split(" ")[1];

  const infoJwt = jwt.verify(accessToken, JWT_KEY);
  req.local_user = infoJwt.user;
  next();
};

app.get("/api/v1/user/profile", authMiddleware, async (req, res) => {
  const userJwt = req.local_user;

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
});

app.listen(9000, () => {
  console.log("http://localhost:9000");
});
