const { Router } = require("express");
const router = Router();

const API_GROUP = "/api/v1/recipe";

// untuk get semua recipe

/**
 * @swagger
 * components:
 *   schemas:
 *     RecipeResponse:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - author
 *         - ingredients
 *         - steps
 *         - duration
 *         - createdAt
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the recipe
 *         title:
 *           type: string
 *           description: The title of your recipe
 *         author:
 *           type: string
 *           description: The recioe author
 *         ingredients:
 *           type: array
 *           items:
 *             type: string
 *           description: The recipe ingredients need
 *         steps:
 *           type: array
 *           items:
 *             type: string
 *           description: The recipe step by step
 *         duration:
 *           type: number
 *           description: The recipe duration in second
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         id: d5fE_asz
 *         title: Nasi goreng rumahan
 *         author: Nando
 *         ingredients: ["bawang", "nasi", "telor", "cabai"]
 *         steps: ["Siapkan nasi", "Iris bawang dan cabai", "goreng telur terlebih dahulu", "masukan bumbu tadi", "masukan nasi", "nasgor siap dihidangkan"]
 *         duration: 600
 *         createdAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Recipe
 *   description: The recipe managing API
 * /api/v1/recipe:
 *   post:
 *     summary: Create a new Recipe
 *     tags: [Recipe]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - ingredients
 *               - steps
 *               - duration
 *             properties:
 *               id:
 *                 type: string
 *                 description: The auto-generated id of the recipe
 *               title:
 *                 type: string
 *                 description: The title of your recipe
 *               author:
 *                 type: string
 *                 description: The recioe author
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The recipe ingredients need
 *               steps:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: The recipe step by step
 *               duration:
 *                 type: number
 *                 description: The recipe duration in second
 *               createdAt:
 *                 type: string
 *                 format: date
 *                 description: The date the book was added
 *             example:
 *               title: Nasi goreng rumahan
 *               author: Nando
 *               ingredients: ["bawang", "nasi", "telor", "cabai"]
 *               steps: ["Siapkan nasi", "Iris bawang dan cabai", "goreng telur terlebih dahulu", "masukan bumbu tadi", "masukan nasi", "nasgor siap dihidangkan"]
 *               duration: 600
 *
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RecipeResponse'
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               required:
 *                 - error
 *               example:
 *                 error: Gagal untuk menambah recipe
 */

router.get(API_GROUP, (req, res) => {
  return res.status(200).json({ message: "success" });
});

// untuk recipe dengan id
router.get(`${API_GROUP}/:id`, () => {
  return;
});

// untuk membuat recipe baru
router.post(`${API_GROUP}`, (req, res) => {
  const body = req.body;
  console.log({ body });

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
  return;
});

// untuk menghapus recipe dengan id
router.delete(`${API_GROUP}/:id`, () => {
  return;
});

const recipeRouter = router;
module.exports = recipeRouter;
