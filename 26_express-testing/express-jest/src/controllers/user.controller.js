exports.ping = (req, res) => {
  res.status(200).json({ ping: "PONG" });
};
