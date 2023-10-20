const { Router } = require("express");
const router = Router();
const recipeRouter = require("./recipe.router");

router.get("/api/v1/ping", (_, res) => {
  res.status(200).json({
    message: "PONG!"
  });
});

router.use(recipeRouter);
const appRouters = router;
module.exports = appRouters;
