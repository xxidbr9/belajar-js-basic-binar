import express from "express";
import mainRouter from "./router/index.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser({ extended: false }));
app.use(cors("*"));

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use(mainRouter);

app.listen(9000, () => {
  console.log(`app run http://localhost:${9000}`);
});
