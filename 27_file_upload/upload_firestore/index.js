const express = require("express");
const saltedMd5 = require("salted-md5");
const admin = require("firebase-admin");
const multer = require("multer");
const serviceAccount = require("./xxidbr9_firebase-config.json");
const path = require("path");

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://kampus-merdeka-9d862.appspot.com"
});

const storage = multer.memoryStorage();
const upload = multer({ storage });
const uploadMiddleware = upload.single("file_upload");

// app.use(bodyParser({ extended: true }));
app.locals.bucket = admin.storage().bucket();
app.post("/upload", (req, res) => {
  uploadMiddleware(req, res, async err => {
    if (err) {
      res.send(err);
    } else {
      try {
        const name = saltedMd5(req.file.originalname, "SUPER-S@LT!");
        const fileName = name + path.extname(req.file.originalname);
        await app.locals.bucket
          // .file(req.file.originalname)
          .file(fileName)
          .createWriteStream()
          .end(req.file.buffer);
        res.json({ ok: "ok" });
      } catch (err) {
        res.send(err);
      }
    }
  });
});

app.listen(9000, () => {
  console.log("Server jalan di http://localhost:9000");
});
