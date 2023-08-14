import BlogModel from "../models/blog.models.js";

const blogModel = new BlogModel();

export const getBlogs = async (req, res) => {
  const blogs = await blogModel.getAll();
  return res.json({ blogs });
};

export const addBlog = async (req, res) => {
  const { title, content, author } = req.body;
  // harus ada checking
  const blogs = await blogModel.create({ title, content, author });
  return res.json({ blogs });
};
