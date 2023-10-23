const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const PORT = 3001;
app.use(bodyParser({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).json({ ping: "OK", from: "Account Service 1" });
});

app.get("/ping", (req, res) => {
  return res.status(200).json({ ping: "OK", from: "Account Service 1" });
});

app.listen(PORT, () => {
  console.log(`
Account service run in

http://localhost:${PORT}
`);
});
