import { v4 } from "uuid";
import db from "../config/db.js";

class BlogModel {
  tableName = "blogs";
  constructor() {}
  async getAll() {
    return await db(this.tableName).select("*");
  }

  async create({ title, content, author }) {
    const newBlog = {
      id: v4(),
      title,
      content,
      author
    };
    await db(this.tableName).insert(newBlog);
    return newBlog;
  }
}

export default BlogModel;
