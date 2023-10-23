const db = require("../../../config");
const { runMigration } = require("../../../scripts/run-migration");
const UserModel = require("../user.model");

describe("testing user.model", () => {
  beforeAll(async () => {
    await runMigration();
  });

  afterAll(async () => {
    await db.destroy();
  });

  test("should return the same user", async () => {
    const userModel = new UserModel();
    const new_user = {
      fullname: "Nando",
      email: "barnando13@gmail.com"
    };
    const resp = await userModel.addNewUser(new_user);

    expect(resp[0].fullname).toBe(new_user.fullname);
  });
});
