import { Router } from "express";
import { castVote } from "../controllers/voteController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/", authMiddleware, castVote);

export default router;
