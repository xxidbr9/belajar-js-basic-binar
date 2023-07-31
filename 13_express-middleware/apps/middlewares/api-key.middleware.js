const { X_API_KEY } = require("../utils/constants");
const { responseError } = require("../utils/restResp.helper");

function apiKeyMiddleware(req, res, next) {
  const apiKeyHeader = req.headers["x-api-key"];
  if (!!apiKeyHeader && apiKeyHeader === X_API_KEY) return next();
  return res.status(403).json(responseError("api key not valid!"));
}

module.exports = apiKeyMiddleware;
