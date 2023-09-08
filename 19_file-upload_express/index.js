const express = require("express");
const path = require("path"); // path ini melihat lokasi apps ini berjalan di harddisk
const multer = require("multer"); // buat handle upload
const knexFile = require("./knexfile");
const knex = require("knex");
const { v4 } = require("uuid");

const app = express();
const db = knex(knexFile["development"]);

app.use("/static", express.static("media")); // /static ini sebagai folder yang public/bisa diakses luar
app.get("/ping", (req, res) => {
  res.json({ ping: "PONG!!" });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name
    cb(null, "media");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  }
});

// Define the maximum size for uploading
// max 10 MB. ini optional 1 byte, 1000 b => 1kb, 1000kb => 1mb, 1000mb => 1gb
const maxSize = 1024 * 1_0000;
const uploadConfig = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb) {
    var filetypes = /jpeg|jpg|png/; // jenis file yang bisa di simpan
    var mimetype = filetypes.test(file.mimetype);

    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb("Error: File upload only supports the " + filetypes);
  }

  // "file" is the name of file attribute di body
}).single("file");

app.post("/upload", (req, res) => {
  uploadConfig(req, res, async err => {
    if (err) {
      res.send(err);
    } else {
      // SUCCESS, image successfully uploaded
      const newFile = {
        id: v4(),
        filename: req.file.filename
      };
      await db("file_upload").insert(newFile);
      res.send("Success, Image uploaded!");
    }
  });
});

app.get("/list-media", async (req, res) => {
  const medias = await db("file_upload").select("*");
  res.json({ medias });
});

app.listen(9000, () => {
  console.log("Server jalan di http://localhost:9000");
});
