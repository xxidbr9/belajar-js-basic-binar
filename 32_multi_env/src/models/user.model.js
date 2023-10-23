const { v4 } = require("uuid");
const db = require("../../config");

class UserModel {
  async addNewUser({ fullname, email }) {
    const new_user = {
      id: v4(),
      fullname,
      email
    };

    const query = await db("users").insert(new_user).returning("*");
    return query;
  }
}

module.exports = UserModel;
