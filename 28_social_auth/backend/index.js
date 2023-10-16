const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const { default: axios } = require("axios");

app.use(bodyParser({ extended: true }));
app.use(cors({ origin: "*" }));

const googleUrlUserInfo =
  "https://www.googleapis.com/oauth2/v2/userinfo?access_token=";

app.get("/callback/google", async (req, res) => {
  const accessToken = req.query.access_token;

  const response = await axios(`${googleUrlUserInfo}${accessToken}`);
  const user = {
    id: response.data.id,
    email: response.data.email,
    name: response.data.name,
    given_name: response.data.given_name,
    family_name: response.data.family_name,
    picture: response.data.picture,
    firstName: response.data.given_name,
    lastName: response.data.family_name
  };
  console.log({ user });
  return res.json({ hello: "world", user });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "barnando@binar.com" && password === "barnando123") {
    return res.status(200).json({
      data: {
        email: "barnando@binar.com",
        id: "123456",
        fullname: "Barnando Akbarto"
      }
    });
  } else {
    res.status(403).json({ error: "Gagal login" });
  }
});

app.listen(9000, () => {
  console.log("http://localhost:9000");
});
