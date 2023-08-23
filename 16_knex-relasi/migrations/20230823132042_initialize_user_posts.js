const TABLE_NAME = "user_posts";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.uuid("id").primary().notNullable();
    table.string("description");
    table.string("file_url");
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(TABLE_NAME);
};
