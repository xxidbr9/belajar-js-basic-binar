const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const { v2: cloudinary } = require("cloudinary");
const multer = require("multer");

require('dotenv').config()

cloudinary.config({
  cloud_name: "xxidbr9",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function handleUpload(file, folder) {
  const res = await cloudinary.uploader.upload(file, {
    folder: folder ?? "test",
    resource_type: "auto"
    // public_id: filename,
  });
  return res;
}

const storage = multer.memoryStorage();
const upload = multer({ storage });
const uploadMiddleware = upload.single("file_upload");

// app.use(bodyParser({ extended: true }));

app.post("/upload", (req, res) => {
  uploadMiddleware(req, res, async err => {
    if (err) {
      res.send(err);
    } else {
      const b64 = Buffer.from(req.file.buffer).toString("base64"); // rubah file menjadi string
      const dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      try {
        const cldRes = await handleUpload(dataURI, req.query["path"]);
        // sambungin database disini
        res.json(cldRes);
      } catch (err) {
        res.send(err);
      }
    }
  });
});

app.listen(9000, () => {
  console.log("Server jalan di http://localhost:9000");
});
