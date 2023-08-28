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

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await blogModel.delete(id);
  return res.json({ blog });
};

export const editBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  const blog = await blogModel.edit({ id, title, content, author });
  return res.json({ blog });
};
