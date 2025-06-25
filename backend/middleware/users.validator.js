import { body } from "express-validator";

export const validateUpdateUser = [
  // Optional: only validate if present
  body("username")
    .optional()
    .isLength({ min: 3, max: 20 }).withMessage("Username must be 3-20 characters")
    .matches(/^[a-zA-Z][a-zA-Z0-9_]{2,19}$/)
    .withMessage("Username must start with a letter and contain only letters, numbers, and underscores"),

  body("email")
    .optional()
    .trim()
    .normalizeEmail()
    .isEmail().withMessage("Invalid email address"),

   body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/)
    .withMessage("Password must contain uppercase, lowercase, number, and symbol"),

  body("desc")
    .optional()
    .isLength({ max: 50 }).withMessage("Description must be at most 50 characters"),

  body("city")
    .optional()
    .isLength({ max: 50 }).withMessage("City must be at most 50 characters"),

  body("from")
    .optional()
    .isLength({ max: 50 }).withMessage("From must be at most 50 characters"),

  body("relationship")
    .optional()
    .isIn([1, 2, 3]).withMessage("Relationship must be 1 (Single), 2 (In a relationship), or 3 (Married)"),

  // Disallow `followers`, `following`, `isAdmin`
  body(["followers", "following", "isAdmin"])
    .not().exists()
    .withMessage("Modification of this field is not allowed"),
];
