const db = require("../config");

async function runMigration() {
  try {
    await db.migrate.latest();
    console.log("Migrations completed successfully.");
  } catch (error) {
    console.error("Error running migrations:", error);
  } finally {
    await db.destroy();
  }
}

module.exports = runMigration;
