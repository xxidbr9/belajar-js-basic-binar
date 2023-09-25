import express from "express";

const app = express();


app.get("/ping", (_, res) => {
  res.json({ ping: "PONG" })
})

app.listen(9000, () => {
  console.log("Hello world")
})