require("dotenv").config();
const express = require("express");
const mainRouter = require("./routes");

const app = express();

app.use(mainRouter);
app.listen(9000, () => {
  console.log("server running on http://localhost:9000");
});
