const { Router } = require("express");
const router = Router();

const API_GROUP = "/api/v1/recipe";

router.get(API_GROUP, (req, res) => {
  // #swagger.tags = ['Recipe']
  return res.status(200).json({ message: "success" });
});

// untuk recipe dengan id
router.get(`${API_GROUP}/:id`, () => {
  // #swagger.tags = ['Recipe']

  /* #swagger.responses[200] = {
        description: "Get recipe by id",
        schema: {
          id: "d5fE_asz",
          title: "Mie goreng abang-abang",
          author: "Nando",
          ingredients: ["bawang", "mie", "telor", "cabai", "kecap"],
          steps: [
            "Siapkan mie yang sudah matang",
            "Ulek bawang dan cabai",
            "goreng telur terlebih dahulu",
            "masukan bumbu tadi",
            "masukan mie",
            "tuangkan kecap secukupnya",
            "nasgor siap dihidangkan"
          ],
          duration: 600,
          createdAt: "2020-03-10T04:05:06.157Z"
        }
} */

  return res.status(200).json({
    id: "d5fE_asz",
    title: "Mie goreng abang-abang",
    author: "Nando",
    ingredients: ["bawang", "mie", "telor", "cabai", "kecap"],
    steps: [
      "Siapkan mie yang sudah matang",
      "Ulek bawang dan cabai",
      "goreng telur terlebih dahulu",
      "masukan bumbu tadi",
      "masukan mie",
      "tuangkan kecap secukupnya",
      "nasgor siap dihidangkan"
    ],
    duration: 600,
    createdAt: "2020-03-10T04:05:06.157Z"
  });
});

// untuk membuat recipe baru
router.post(`${API_GROUP}`, (req, res) => {
  // #swagger.tags = ['Recipe']
  /* 
  #swagger.parameters['body'] = {
            in: 'body',
            description: 'recipe body.',
            required: true,
            schema: {
                title: "Mie goreng abang-abang",
                author: "Nando",
                ingredients: ["bawang", "mie", "telor", "cabai", "kecap"],
                steps: [
                  "Siapkan mie yang sudah matang",
                  "Ulek bawang dan cabai",
                  "goreng telur terlebih dahulu",
                  "masukan bumbu tadi",
                  "masukan mie",
                  "tuangkan kecap secukupnya",
                  "nasgor siap dihidangkan"
                ],
                duration: 600,
            }
        }
  */
  const body = req.body;
  console.log({ body, ok: "" });

  /* 
  #swagger.responses[201] = {
    description:"",
    schema:{
      id: "d5fE_asz",
      title: "Mie goreng abang-abang",
      author: "Nando",
      ingredients: ["bawang", "mie", "telor", "cabai", "kecap"],
      steps: [
        "Siapkan mie yang sudah matang",
        "Ulek bawang dan cabai",
        "goreng telur terlebih dahulu",
        "masukan bumbu tadi",
        "masukan mie",
        "tuangkan kecap secukupnya",
        "nasgor siap dihidangkan"
      ],
      duration: 600,
      createdAt: "2020-03-10T04:05:06.157Z"
    }
  }
  */
  const error = false;
  if (error) {
    /* 
    #swagger.responses[500] = {
      description:"",
      schema:{
        error: "Gagal membuat recipe baru"
      }
    }
    */
    return res.status(500).json({
      error: "Gagal membuat recipe baru"
    });
  }

  return res.status(201).json({
    id: "d5fE_asz",
    title: "Mie goreng abang-abang",
    author: "Nando",
    ingredients: ["bawang", "mie", "telor", "cabai", "kecap"],
    steps: [
      "Siapkan mie yang sudah matang",
      "Ulek bawang dan cabai",
      "goreng telur terlebih dahulu",
      "masukan bumbu tadi",
      "masukan mie",
      "tuangkan kecap secukupnya",
      "nasgor siap dihidangkan"
    ],
    duration: 600,
    createdAt: "2020-03-10T04:05:06.157Z"
  });
});

// untuk mengedit recipe dengan id
router.put(`${API_GROUP}/:id`, () => {
  // #swagger.tags = ['Recipe']
  return;
});

// untuk menghapus recipe dengan id
router.delete(`${API_GROUP}/:id`, (req, res) => {
  // #swagger.tags = ['Recipe']

  // jika harus login
  /* 
  #swagger.security = [{
     "bearerAuth": []
  }] 
  */
  const reqHeaders = req.headers;
  const arrayAuth = reqHeaders["authorization"].split(" "); // "Bearer hello-dunia"
  if (arrayAuth[0] === "Bearer") { // Bearer ini hanya untuk kasih tau kalau token yang dibawa itu jenisnya jwt
    console.log("ini token Bearer");
  }
  const token = arrayAuth[1];
  console.log({ token });

  /* 
    #swagger.responses[204] = {
    }
  */

  return res.status(204).json({});
});

const recipeRouter = router;
module.exports = recipeRouter;
