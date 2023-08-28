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

  async delete(id) {
    const findBlog = await db(this.tableName).where("id", id).first();
    if (!findBlog?.id) throw new Error("data tidak ada");

    await db(this.tableName).where("id", id).del();
    return findBlog;
  }

  async edit({ id, title, content, author }) {
    const existingBlog = await db(this.tableName).where('id', id).first();
    if (!existingBlog?.id) throw new Error("data tidak ada");

    const editedBlog = {
      id: existingBlog.id,
      title: title || existingBlog.title,
      content: content || existingBlog.content,
      author: author || existingBlog.author,
    };
    await db(this.tableName).update(editedBlog).where('id', id);
    return editedBlog;
  }
}

export default BlogModel;
