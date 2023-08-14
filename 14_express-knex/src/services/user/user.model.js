const db = require("../../config/db.config");
const { v4 } = require("uuid");
const bcrypt = require("bcrypt");
const { ErrorServer } = require("../../utils/helpers/error.helper");
const { USER_CONSTANTS } = require(".");

class UserModel {
  tableName = USER_CONSTANTS.TABLE_NAME;
  constructor() {}

  // save
  async save(fullname, email, password, gender) {
    try {
      const newUser = {
        id: v4(),
        fullname,
        email,
        password: await bcrypt.hash(password, 10),
        gender
      };

      await db(this.tableName).insert(newUser);

      return {
        id: newUser.id,
        fullname: newUser.fullname,
        email: newUser.email,
        gender: newUser.gender
      };
    } catch (e) {
      throw new ErrorServer(e.detail);
    }
  }

  // findOne
  async findOne(id) {
    try {
      const result = await db
        .select("id", "fullname", "email", "gender", "created_at", "updated_at")
        .table(this.tableName)
        .where("id", id)
        .limit(1);

      if (result.length > 0) return result[0];
      return {};
    } catch (e) {
      throw new ErrorServer(e.detail);
    }
  }

  // findOneWithEmail
  async findOneWithEmail(email) {
    try {
      const result = await db
        .select("id", "fullname", "email", "gender", "created_at", "updated_at")
        .table(this.tableName)
        .where("email", email)
        .limit(1);

      if (result.length > 0) return result[0];
      return {};
    } catch (e) {
      throw new ErrorServer(e.detail);
    }
  }

  // find
  async find(
    { limit, page } = { limit: 10, page: 1 },
    { email, id, gender } = { email: "", id: "", gender: "" }
  ) {
    try {
      let query = db
        .select("id", "fullname", "email", "gender", "created_at", "updated_at")
        .table(this.tableName);

      if (!!email) query = query.where("email", email);
      if (!!id) query = query.where("id", id);
      if (!!gender) query = query.where("gender", gender);
      if (limit > 0) query = query.limit(limit);
      if (page > 1) query = query.offset(page * limit - limit);

      // get total
      let queryTotal = db(this.tableName).count("*");
      if (!!email) queryTotal = queryTotal.where("email", email);
      if (!!id) queryTotal = queryTotal.where("id", id);
      if (!!gender) queryTotal = queryTotal.where("gender", gender);

      // assign total
      let total = 0;
      const totalQuery = await queryTotal;
      if (totalQuery.length > 0) total = Number(totalQuery[0].count);

      const users = await query;
      return {
        users,
        total,
        page,
        has_next: page * limit < total
      };
    } catch (e) {
      console.log(e);
      throw new ErrorServer(e.detail);
    }
  }
}

module.exports = UserModel;
