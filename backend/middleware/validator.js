
import { validationResult } from "express-validator";

// Custom middleware to check for validation errors
export const validateInputs = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
