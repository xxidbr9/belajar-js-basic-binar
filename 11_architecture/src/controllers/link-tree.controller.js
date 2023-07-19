const { responseError, responseOk } = require("../helpers/restResponse.helper");
const LinkTreeModel = require("../models/link-tree.model");

const models = new LinkTreeModel();

function linkTreeGetLinks(req, res) {
  const data = models.findAll();
  return res.status(200).json(responseOk("Success get all link", data));
}

module.exports = {
  linkTreeGetLinks
};
