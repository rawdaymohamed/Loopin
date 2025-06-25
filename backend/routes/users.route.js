import { Router } from "express";
import { updateUserProfile } from "../controllers/users.controller.js";
import { protect } from "../middleware/auth.js";
import { validateUpdateUser } from "../middleware/users.validator.js";
import { validateInputs } from "../middleware/validator.js";

const router = Router();
router.put("/:id",
  protect,
  validateUpdateUser,
  validateInputs,
  updateUserProfile
);
export default router;