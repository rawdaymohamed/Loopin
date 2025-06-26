import { body, param, validationResult } from "express-validator";
import mongoose from "mongoose";
export const validateCreatePost = [

    body("desc")
        .optional()
        .isString().withMessage("Description must be a string")
        .isLength({ max: 500 }).withMessage("Description cannot exceed 500 characters"),

    body("img")
        .optional()
        .isURL().withMessage("Image must be a valid URL"),

    // Custom rule: at least one of `desc` or `img` is required
    (req, res, next) => {
        const { desc, img } = req.body;

        if (!desc && !img) {
            return res.status(400).json({
                errors: [{ msg: "Either description or image is required", param: "desc/img" }]
            });
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    }
];


export const validateUpdatePost = [
  // Validate post ID param
  param("id")
    .custom((value) => {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        throw new Error("Post ID must be a valid MongoDB ObjectId");
      }
      return true;
    }),

  // Optional desc field
  body("desc")
    .optional()
    .isString().withMessage("Description must be a string")
    .isLength({ max: 500 }).withMessage("Description cannot exceed 500 characters"),

  // Optional image field
  body("img")
    .optional()
    .isURL().withMessage("Image must be a valid URL"),

  // Final middleware to collect errors and add custom condition
  (req, res, next) => {
    const errors = validationResult(req);
    const errorList = [...errors.array()];

    const { desc, img } = req.body;

    // Only add custom error if both fields are missing
    if (!desc && !img) {
      errorList.push({
        msg: "Either description or image is required",
        param: "desc/img",
        location: "body"
      });
    }

    if (errorList.length > 0) {
      return res.status(400).json({ errors: errorList });
    }

    next();
  }
];
export const validatePostId = [
  // Validate post ID param
  param("id")
    .custom((value) => {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        throw new Error("Post ID must be a valid MongoDB ObjectId");
      }
      return true;
    })
];