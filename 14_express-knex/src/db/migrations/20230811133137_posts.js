const tableName = "posts";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tableName, table => {
    table.string("id").primary().unique();
    table.string("content").notNullable(); // url video
    table.string("description").notNullable();
    table.string("user_id").references("id").inTable("users");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists(tableName);
};
