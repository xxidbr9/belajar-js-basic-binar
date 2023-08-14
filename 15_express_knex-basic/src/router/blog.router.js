import { Router } from "express";
import { addBlog, getBlogs } from "../controllers/blog.controller.js";
const router = Router();

router.get("/api/v1/blogs", getBlogs);
router.post("/api/v1/blogs", addBlog);

const blogRouter = router;
export default blogRouter;
