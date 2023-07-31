const express = require("express");
const mainApp = express();

// All Feature
const authRouter = require("./services/auth/auth.router");
const apiKeyMiddleware = require("./middlewares/api-key.middleware");

mainApp.use(apiKeyMiddleware, authRouter);

module.exports = mainApp;
