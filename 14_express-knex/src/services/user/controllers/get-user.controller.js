const { ErrorUserInput } = require("../../../utils/helpers/error.helper");
const { errorResp, okResp } = require("../../../utils/helpers/response.helper");
const UserModel = require("../user.model");

const getUserByIDController = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) throw new ErrorUserInput("id are required!");

    const userModel = new UserModel();
    const user = await userModel.findOne(id);

    return res.status(200).json(okResp("success get user", user));
  } catch (e) {
    return res.status(e.code).json(errorResp(e.message));
  }
};

module.exports = getUserByIDController;
