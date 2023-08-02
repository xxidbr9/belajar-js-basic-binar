const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { API_PATH, JWT_KEY } = require("../../utils/constants");
const { responseOk } = require("../../utils/restResp.helper");

const USER_PATH_V1 = `${API_PATH}/v1/user`;

router.get(`${USER_PATH_V1}/profile`, (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];

  const user = jwt.verify(token, JWT_KEY);
  console.log(token);
  return res.status(200).json(responseOk("success get user profile", user));
});

module.exports = router;
