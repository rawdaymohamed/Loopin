import { Router } from "express";
import { deleteUserProfile, followUnfollowUser, getUserProfile, updateUserProfile } from "../controllers/users.controller.js";
import { protect } from "../middleware/auth.js";
import { validateUpdateUser, validateUserId } from "../middleware/users.validator.js";
import { validateInputs } from "../middleware/validator.js";

const router = Router();
router.put("/:id",
  protect,
  validateUpdateUser,
  validateInputs,
  updateUserProfile
);
router.delete("/:id",
  protect,
  validateUserId,
  validateInputs,
  deleteUserProfile);
router.get("/:id",
  protect,
  validateUserId,
  validateInputs,
  getUserProfile
);
router.put("/:id/follow",
  protect,
  validateUserId,
  followUnfollowUser);

export default router;