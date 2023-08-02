class ErrorAuth extends Error {
  code;
  constructor(...args) {
    super(args);
    this.message = "auth error";
    this.name = "AUTH_ERROR";
    this.code = 403;
  }
}

class ErrorKey extends Error {
  code;
  constructor(...args) {
    super(args);
    this.message = "key error";
    this.name = "KEY_ERROR";
    this.code = 403;
  }
}

class ErrorServer extends Error {
  code;
  constructor(...args) {
    super(args);
    this.message = "server error";
    this.name = "SERVE_ERROR";
    this.code = 500;
  }
}

module.exports = {
  ErrorAuth,
  ErrorKey,
  ErrorServer
};
