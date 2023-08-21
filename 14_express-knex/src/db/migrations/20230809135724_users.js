const tableName = "users"

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, table => {
    table.string("id").primary().unique();
    table.string("fullname").notNullable();
    table.string("email").unique().notNullable();
    table.string("gender").notNullable();
    table.string("password").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
