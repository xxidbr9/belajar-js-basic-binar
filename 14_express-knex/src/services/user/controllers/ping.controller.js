const pingController = (req, res) => {
  res.json({
    ping: "pong!"
  });
};

module.exports = pingController;
