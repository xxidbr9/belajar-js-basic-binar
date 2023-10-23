const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const PORT = 3002;
app.use(bodyParser({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).json({ ping: "OK", from: "Profile Service" });
});

app.get("/ping", (req, res) => {
  return res.status(200).json({ ping: "OK", from: "Profile Service" });
});

app.listen(PORT, () => {
  console.log(`
Profile service run in

http://localhost:${PORT}
`);
});
