import { Router } from "express";
import { checkUserExists, registerValidationRules, validateLoginInputs } from "../middleware/validateUser.js";
import { validateInputs } from "../middleware/validator.js";
import { register, login } from "../controllers/auth.controller.js";

// This is the auth route for the Loopin Auth API
// It handles the base route and can be extended for authentication-related endpoints

const router = Router();
router.post("/register",
    registerValidationRules,
    validateInputs,
    checkUserExists,
    register
);
router.post("/login",
    validateLoginInputs,
    validateInputs,
    login
);
export default router;