const express = require("express");
const router = express.Router();
const controller = require("../controllers/link-tree.controller");

// routing group
const prefixPath = "api/v1/link-tree";

// register router
router.get(`/${prefixPath}/links`, controller.linkTreeGetLinks);
router.get(`/${prefixPath}/links/:name`, controller.linkTreeGetLinkByName);
router.post(`/${prefixPath}/add`, controller.linkTreeAddNewLink);
router.put(`/${prefixPath}/edit/:name`, controller.linkTreeEditLinkByName);
router.delete(`/${prefixPath}/delete/:name`, controller.linkTreeDeleteByName);
router.get(`/:name`, controller.linkTreeRedirectByName);

module.exports = router;
