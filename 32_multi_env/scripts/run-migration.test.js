const db = require("../config");
const { runMigration, rollbackMigration } = require("./run-migration");

describe("first", () => {
  beforeAll(async () => {
    await runMigration();
  });

  afterAll(async () => {
    await rollbackMigration();
    await db.destroy();
  });

  test("should run rollback", () => {

  });
});
