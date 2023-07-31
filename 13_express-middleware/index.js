const express = require("express");
const http = require("http");
const expressApp = express();
const mainApp = require("./apps/router");

// use main apps
expressApp.use(mainApp);

const PORT = 9000;

// Server HTTP
const httpServer = http.createServer(expressApp);
httpServer.listen(PORT, () => {
  console.log(`run on : http://localhost:${PORT}`);
});
