// const { ErrorUserInput } = require("../../../utils/helpers/error.helper");
const { errorResp, okResp } = require("../../../utils/helpers/response.helper");
const UserModel = require("../user.model");

const getAllUsersController = async (req, res) => {
  try {
    const filterReq = {};
    const query = req.query;
    if (!!query.limit) filterReq.limit = Number(query.limit);
    if (!!query.page) filterReq.page = Number(query.page);

    const userModel = new UserModel();
    const users = await userModel.find({
      limit: filterReq.limit,
      page: filterReq.page
    });

    return res.status(200).json(okResp("success get all user", users));
  } catch (e) {
    return res.status(e.code || 500).json(errorResp(e.message));
  }
};

module.exports = getAllUsersController;
