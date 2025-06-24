import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
    res.send("Welcome to Loopin Users API");
});
export default router;