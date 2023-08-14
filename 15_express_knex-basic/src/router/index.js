import { Router } from "express";
import blogRouter from "./blog.router.js";
const router = Router();

router.use(blogRouter);

const mainRouter = router;
export default mainRouter;
