const express = require("express"); // ini ambil dari node modules
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const PORT = 9000;

const database = {
  binar: "https://www.binaracademy.com/",
  facebook: "https://www.facebook.com"
};

const rest_app = async () => {
  app.use(morgan("dev"))
  app.use(bodyParser.json());

  app.get("/helo", (_, res) => {
    res.json({ hello: "dunia" });
  });

  app.get("/nando", (_, res) => {
    res.json({ hello: "nandp" });
  });

  app.get("/list", (req, res) => {
    const listUrl = Object.entries(database);
    // console.log(listUrl);

    /* 
    [
      [ 'binar', 'https://www.binaracademy.com/' ],
      [ 'facebook', 'https://www.facebook.com' ]
    ] =>
    [
      {
        "binar":"https://www.binaracademy.com/"
      }
    ]
    */
    const transformData = listUrl.map(value => {
      return {
        "url-name": value[1],
        "url-to": value[0]
      };
    });

    return res.status(200).json({
      message: "Berhasil ambil data list",
      data: transformData
    });
    // return res.status(204).end();
  });

  // : => titik 2 itu artinya params
  app.get("/link-to/:to", (req, res) => {
    const linkTo = req.params["to"];

    return res.json({
      message: "Berhasil mendapatkan link",
      data: {
        url: database[linkTo]
      }
    });
  });

  /* 
  ? INFO
  - [X] Bisa simpan url dengan key
  {
    "url-name":"nama-url-singkat",
    "url-to":"link url"
  }
  */
  app.post("/add", (req, res) => {
    const bodyJson = req.body;
    database[bodyJson["url-name"]] = bodyJson["url-to"];
    
    return res.status(201).json({
      message: "success"
    });
  });

  app.delete("/remove/:key", (req, res) => {
    const keyToDelete = req.params["key"];

    delete database[keyToDelete];
    
    return res.statusStatus(200).json({
      message: "success delete"
    });
  });

  // AUTH
  /* 
    /edit/:key
    {
      url-name:"",
      url-to:"",
    }
  */
  app.put("/edit/:key", (req, res) => {
    const keyToEdit = req.params["key"];

    const copyLink = JSON.parse(JSON.stringify(database[keyToEdit]));

    // jika kondisi pertama falsy ambil samping kanannya
    const newKey = req.body["url-name"] || keyToEdit;
    const newBody = req.body["url-to"] || copyLink;

    delete database[keyToEdit];
    database[newKey] = newBody;

    return res.status(201).json({
      message: `success edit ${keyToEdit} => ${newKey}`
    });
  });


  app.get("/to/:url_name",(req,res) =>{
    const urlName = req.params['url_name'];

    return res.redirect(database[urlName]);
  })

  app.listen(PORT, () => {
    console.log(`
    Server berjalan di 
    http://localhost:${PORT}
    `);
  });
};

module.exports = rest_app;
