const express = require("express");
const router = express.Router();
const controller = require("../controllers/link-tree.controller");

// routing group
const prefixPath = "api/v1/link-tree";

// register router
router.get(`/${prefixPath}/links`, controller.linkTreeGetLinks);
router.get(`/${prefixPath}/links/:name`);
router.post(`/${prefixPath}/add`);
router.put(`${prefixPath}/edit/:name`);
router.delete(`${prefixPath}/edit/:name`);

module.exports = router;
