const { ping } = require("../user.controller");

describe("testing ping", () => {
  it("test jest", () => {
    expect("hello").toBe("hello");
  });

  it("test resp", async () => {
    const req = jest.fn();
    const res = MockResTest;
    ping(req, res);

    expect(res.mockJson).toBeCalled();
    expect(res.mockStatus).toBeCalled();
  });
});

class MockResTest {
  static mockJson = jest.fn();
  static mockStatus = jest.fn();

  static status(_arg) {
    this.mockStatus();
    return this;
  }

  static json(_arg) {
    this.mockJson();
    return this;
  }
}
