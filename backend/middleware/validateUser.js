import { body } from "express-validator";
import User from "../models/User.js";

// Validation rules for registration
export const registerValidationRules = [
  body("username")
    .trim()
    .notEmpty().withMessage("Username is required")
    .isLength({ min: 3, max: 20 }).withMessage("Username must be 3-20 characters")
    .matches(/^[a-zA-Z][a-zA-Z0-9_]{2,19}$/)
    .withMessage("Username must start with a letter and contain only letters, numbers, or underscores"),
body("email")
  .trim()
  .notEmpty().withMessage("Email is required")
  .normalizeEmail()
  .isEmail().withMessage("Invalid email address"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/)
    .withMessage("Password must contain uppercase, lowercase, number, and symbol")
];

// Middleware to check if email or username already exists
export const checkUserExists = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({
        message: existingUser.username === username
          ? "Username already taken"
          : "Email already registered",
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};
export const validateLoginInputs = [
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .normalizeEmail()
    .isEmail().withMessage("Invalid email address"),

  body("password")
    .notEmpty().withMessage("Password is required")
];  
