const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const specs = require('../swagger-output.json');
const appRouters = require("./routers");

const app = express();

const serverRunner = () => {
  app.use(bodyParser({ extended: true }));
  app.use(morgan("dev"));

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
  // main routers
  app.use(appRouters);

  const server = http.createServer(app); // ini dibutuhkan kalau kalian pakai lebih dari 1 server, contoh express dan socket.io

  server.listen(9000, () => {
    console.log("Server running, http://localhost:9000");
  });
};

module.exports = serverRunner;
