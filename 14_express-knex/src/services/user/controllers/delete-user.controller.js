const { ErrorUserInput } = require("../../../utils/helpers/error.helper");
const { errorResp, okResp } = require("../../../utils/helpers/response.helper");
const UserModel = require("../user.model");

const deleteUserByIDController = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) throw new ErrorUserInput("id are required!");

    const userModel = new UserModel();
    
    // find user
    const finduser = await userModel.findOne(id);
    if (finduser.id !== id) throw new ErrorUserInput("can't find id");

    // delete user
    await userModel.delete(id);

    return res.status(200).json(okResp("success delete user", finduser));
  } catch (e) {
    return res.status(e.code).json(errorResp(e.message));
  }
};

module.exports = deleteUserByIDController;
