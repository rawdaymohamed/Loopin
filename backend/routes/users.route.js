import { Router } from "express";
import { deleteUserProfile, getUserProfile, updateUserProfile } from "../controllers/users.controller.js";
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
export default router;