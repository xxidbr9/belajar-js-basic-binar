class ErrorAuth extends Error {
  constructor() {
    this.message = "auth error";
    this.name = "AUTH_ERROR";
  }
}
