const { runMigration } = require("../scripts/run-migration");

runMigration()
  .then(() => process.exit(0)) // Exit with a success code (0)
  .catch(error => {
    console.error("Script failed:", error);
    process.exit(1); // Exit with a failure code (1)
  });
