const express = require("express");
const { ping } = require("./controllers/user.controller");

const runServer = () => {
  const app = express();
  app.get("/ping", ping);

  return app.listen(9000, () => {
    console.log("app run");
  });
};

module.exports = runServer;
