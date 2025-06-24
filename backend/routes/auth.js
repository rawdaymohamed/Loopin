import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
    res.send("Welcome to Loopin Auth API");
});
export default router;