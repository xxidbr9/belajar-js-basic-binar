const { ErrorUserInput } = require("../../../utils/helpers/error.helper");
const { errorResp, okResp } = require("../../../utils/helpers/response.helper");
const UserModel = require("../user.model");

const createUserController = async (req, res) => {
  try {
    const request = {
      fullname: "",
      email: "",
      password: "",
      gender: ""
    };
    const body = req.body;

    if (!body.fullname) throw new ErrorUserInput("fullname are required!");
    if (!body.email) throw new ErrorUserInput("email are required!");
    if (!body.password) throw new ErrorUserInput("password are required!");
    if (!body.gender) throw new ErrorUserInput("gender are required!");

    request.fullname = body.fullname;
    request.email = body.email;
    request.password = body.password;
    request.gender = body.gender;

    const userModel = new UserModel();
    const newUser = await userModel.save(
      request.fullname,
      request.email,
      request.password,
      request.gender
    );

    return res.status(200).json(okResp("success create new user", newUser));
  } catch (e) {
    return res.status(e.code).json(errorResp(e.message));
  }
};

module.exports = createUserController;
