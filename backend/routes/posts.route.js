import { Router } from "express";
import { validateInputs } from "../middleware/validator.js";
import { protect } from "../middleware/auth.js";
import { createPost } from "../controllers/posts.controller.js";
import { validateCreatePost } from "../middleware/posts.validator.js";
const router = Router();

router.post("/", protect, validateCreatePost, createPost);

export default router;