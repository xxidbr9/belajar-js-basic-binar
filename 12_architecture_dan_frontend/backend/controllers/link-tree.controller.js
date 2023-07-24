const { responseOk, responseError } = require("../helpers/restResponse.helper");
const LinkTreeModel = require("../models/link-tree.model");

const models = new LinkTreeModel();

function linkTreeGetLinks(_, res) {
  const link = models.findAll();
  const data = {
    link,
    total: link.length
  };

  return res.status(200).json(responseOk("Success get all link", data));
}

function linkTreeGetLinkByName(req, res) {
  const name = req.params["name"];
  const data = models.findByName(name);
  if (!data) {
    return res.status(404).json(responseError("Link can not be found!"));
  }
  return res.status(200).json(responseOk("Success get all link", data));
}

function linkTreeAddNewLink(req, res) {
  const body = req.body;
  console.log({ body });
  if (!body.name)
    return res.status(401).json(responseError("name is required"));
  if (!body.link)
    return res.status(401).json(responseError("link is required"));

  const data = models.insert(body.name, body.link);
  if (!data) return res.status(400).json(responseError("data already exist"));
  
  return res.status(201).json(responseOk("Success add new all link", data));
}

function linkTreeEditLinkByName(req, res) {
  const name = req.params["name"];
  const body = req.body;

  const data = models.edit(name, body.name, body.link);
  return res
    .status(200)
    .json(responseOk(`Success edit ${name} to ${data.name} link`, data));
}

function linkTreeDeleteByName(req, res) {
  const name = req.params["name"];
  if (!name) return res.status(401).json(responseError("name is required"));

  const data = models.delete(name);
  if (!data) return res.status(400).json(responseError("data is not found"));

  return res.status(200).json(responseOk(`Success delete ${name}`, data));
}

function linkTreeRedirectByName(req, res) {
  const name = req.params["name"];
  if (!name) return res.status(401).json(responseError("name is required"));

  const data = models.findByName(name);
  if (!data) return res.status(400).json(responseError("data is not found"));

  return res.redirect(data.link);
}

module.exports = {
  linkTreeGetLinks,
  linkTreeGetLinkByName,
  linkTreeAddNewLink,
  linkTreeEditLinkByName,
  linkTreeDeleteByName,
  linkTreeRedirectByName
};
