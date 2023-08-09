const express = require("express");
const router = express();
const bodyParser = require("body-parser");

router.use(bodyParser({ extended: false }));
router.get("/api/v1/ping", (req, res) => {
  res.json({
    ping: "ok"
  });
});

router.use(require("../services/user/user.router"));

module.exports = router;
