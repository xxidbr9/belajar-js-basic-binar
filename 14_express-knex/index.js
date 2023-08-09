const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");

const envPath = path.join(__dirname, `.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envPath });

// express
const express = require("express");
const app = express();
const mainAop = require("./src/router");

const port = process.env.PORT;

app.use(morgan("dev"));
app.use(mainAop);

app.listen(port, () => {
  console.log(`app running : http://localhost:${port}`);
});
