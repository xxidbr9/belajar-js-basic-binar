const db = require("../config");

async function runMigration() {
  try {
    await db.migrate.latest();
    console.log("Migrations completed successfully.");
  } catch (error) {
    console.error("Error running migrations:", error);
  }
}

async function rollbackMigration() {
  await db.migrate.rollback();
}

module.exports = { runMigration, rollbackMigration };
