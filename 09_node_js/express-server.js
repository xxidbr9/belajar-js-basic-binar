// installed library
const express = require("express");
const app = express();

function indexController(req, res) {
  // res.send("Hello World");
  res.json({
    hello: "world"
  });
}

app.get("/", (req, res) => {
  return res.status(200).json({
    hello: "world"
  });
});

app.get("/tambah/:a/:b", (req, res) => {
  const params = req.params;
  
  const nilai_a = parseInt(params['a'])
  const nilai_b = parseInt(params.b)

  const hasil = nilai_a + nilai_b;
  return res.status(200).json({
    tambah: hasil
  });
});

app.listen(3000, () => {
  console.log("server jalan di http://localhost:3000");
});
