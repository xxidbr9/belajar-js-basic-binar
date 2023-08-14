const { USER_CONSTANTS } = require("../user");

/**
 * @param { import("knex").Knex.CreateTableBuilder } table
 * */
const postSchema = table => {
  table.string("id").primary().unique();
  table.string("content").notNullable(); // url video
  table.string("description").notNullable();
  table.string("user_id").references("id").inTable(USER_CONSTANTS.TABLE_NAME);
  table.timestamps(true, true);
};

module.exports = postSchema;
