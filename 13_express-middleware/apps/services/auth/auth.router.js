const express = require("express");
const router = express.Router();
const { API_PATH, JWT_KEY } = require("../../utils/constants");
const { responseOk, responseError } = require("../../utils/restResp.helper");
const jwt = require("jsonwebtoken");
const { ErrorAuth, ErrorKey, ErrorServer } = require("../../utils/error");

// AUTH PATH
const AUTH_PATH_V1 = `${API_PATH}/v1/auth`;

router.get(`${AUTH_PATH_V1}/ping`, (req, res) => {
  res.status(200).json({ ping: "OK" });
});

const user = {
  id: "12345",
  username: "nando",
  password: "12345"
};

router.get(`${AUTH_PATH_V1}/error`, async (req, res, next) => {
  try {
    const type = req.query["type"];

    // ini di trow dari code paling dalam
    if (type === "auth") throw new ErrorAuth();
    if (type === "key") throw new ErrorKey();
    if (type === "server") throw new ErrorServer();
  } catch (err) {
    return res.status(err.code || 500).json(responseError(err.message));
  }
});

router.post(`${AUTH_PATH_V1}/login`, async (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];

  // const isSame = username === user.username && password === user.password;

  // if (!isSame) {
  //   return res.status(403).json(responseError("username or password wrong!"));
  // }

  const accessToken = jwt.sign({ username, password }, JWT_KEY, {
    expiresIn: "10s"
  });

  const resp = {
    access_token: accessToken
    // refreshToken:
  };
  return res.status(200).json(responseOk("success login", resp));
});

router.post(`${AUTH_PATH_V1}/register`, (req, res) => {});

module.exports = router;
