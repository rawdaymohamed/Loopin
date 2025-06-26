import { Router } from "express";
import { validateInputs } from "../middleware/validator.js";
import { protect } from "../middleware/auth.js";
import { createPost, updatePost } from "../controllers/posts.controller.js";
import { validateCreatePost, validateUpdatePost } from "../middleware/posts.validator.js";
const router = Router();

router.post("/", protect, validateCreatePost, createPost);
router.put("/:id", protect, validateUpdatePost, validateInputs, updatePost);
export default router;