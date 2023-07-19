const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");

const PORT = 9000;

app.use(morgan("dev"));
app.use(bodyParser.json());

// Fitur Link Tree;
const linkTreeView = require("./views/link-tree.view");
app.use(linkTreeView);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
