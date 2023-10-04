const request = require("supertest");
const runServer = require("../server");

describe("testing rest server", () => {
  let server = null;

  beforeAll(() => {
    server = runServer();
  });

  afterAll(() => {
    server.close();
  });

  test("test GET /ping", async () => {
    return request(server)
      .get("/ping")
      .expect(200) // status
      .then(resp => {
        expect(resp.body).toMatchObject({ ping: "PONG" });
      });
  });
});
