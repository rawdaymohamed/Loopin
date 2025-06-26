import { body, validationResult } from "express-validator";

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
