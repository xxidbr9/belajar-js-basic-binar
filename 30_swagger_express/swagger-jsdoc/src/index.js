const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const appRouters = require("./routers");

const app = express();


const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Binar: Intro to Swagger Documentation",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:9000" // bisa di ganti pakai port kalian secara dynamic
      }
    ]
  },
  apis: ["src/routers/*.router.js"]
};

const specs = swaggerJsdoc(options);

const serverRunner = () => {
  app.use(bodyParser({ extended: true }));
  app.use(morgan("dev"));

  // doc API
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

  // main routers
  app.use(appRouters);

  const server = http.createServer(app); // ini dibutuhkan kalau kalian pakai lebih dari 1 server, contoh express dan socket.io

  server.listen(9000, () => {
    console.log("Server running, http://localhost:9000");
  });
};

module.exports = serverRunner;
