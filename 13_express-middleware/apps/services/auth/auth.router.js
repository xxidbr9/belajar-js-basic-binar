const express = require("express");
const router = express.Router();
const { API_PATH, X_API_KEY } = require("../../utils/constants");

// AUTH PATH
const AUTH_PATH_V1 = `${API_PATH}/v1/auth`;

router.get(`${AUTH_PATH_V1}/ping`, (req, res) => {
  res.status(200).json({ ping: "OK" });
});

router.post(`${AUTH_PATH_V1}/login`, (req, res) => {});
router.post(`${AUTH_PATH_V1}/register`, (req, res) => {});

module.exports = router;
