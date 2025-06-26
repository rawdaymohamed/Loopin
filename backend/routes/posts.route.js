import { Router } from "express";
import { validateInputs } from "../middleware/validator.js";
import { protect } from "../middleware/auth.js";
import {
    createPost,
    deletePost,
    likeUnlikePost,
    updatePost,
    getPostById,
    getTimelinePosts
} from "../controllers/posts.controller.js";
import { validateCreatePost, validatePostId, validateUpdatePost } from "../middleware/posts.validator.js";
const router = Router();

router.post("/", protect, validateCreatePost, createPost);
router.put("/:id", protect, validateUpdatePost, validateInputs, updatePost);
router.delete("/:id", protect, validatePostId, validateInputs, deletePost);
router.put("/:id/like", protect, validatePostId, validateInputs, likeUnlikePost);
router.get("/timeline", protect, getTimelinePosts);
router.get("/:id", validatePostId, validateInputs, getPostById);

export default router;