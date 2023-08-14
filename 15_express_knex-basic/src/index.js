const express = require("express");
const knex = require("knex");
const knexfile = require("../knexfile");

const db = knex(knexfile["development"]);

const app = express();

const PORT = 9000;

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/api/v1/blogs", async (req, res) => {
  const blogs = await db("blogs").select("*");
  console.log(blogs)
  return res.json({ blogs: "hello blogs!" });
});

app.listen(PORT, () => {
  console.log(`app run http://localhost:${PORT}`);
});
