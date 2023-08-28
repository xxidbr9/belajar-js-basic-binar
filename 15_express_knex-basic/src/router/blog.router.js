import { Router } from "express";
import { addBlog, deleteBlog, editBlog, getBlogs } from "../controllers/blog.controller.js";
const router = Router();

router.get("/api/v1/blogs", getBlogs);
router.post("/api/v1/blogs", addBlog);
router.delete("/api/v1/blogs/:id", deleteBlog);
router.put("/api/v1/blogs/:id", editBlog);

const blogRouter = router;
export default blogRouter;
