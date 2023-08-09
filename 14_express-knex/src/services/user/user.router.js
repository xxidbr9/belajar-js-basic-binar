const express = require("express");
const router = express.Router();
const controller = require("./controllers");

const basePath = "/api/v1/user";
router.get(`${basePath}/ping`, controller.pingController);
router.get(`${basePath}`, controller.getAllUserController);
router.get(`${basePath}/:id/profile`, controller.getUserByIDController);
router.post(`${basePath}/create`, controller.createUserController);

module.exports = router;
