const express = require("express");
const app = express();
const cors = require("cors");

const morgan = require("morgan");
const bodyParser = require("body-parser");

const PORT = 9000;

const allowedOrigins = "*";
app.use(cors({ origin: allowedOrigins }));
app.use(morgan("dev"));
app.use(bodyParser.json());

// Fitur Link Tree;
const linkTreeView = require("./views/link-tree.view");
app.use(linkTreeView);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
