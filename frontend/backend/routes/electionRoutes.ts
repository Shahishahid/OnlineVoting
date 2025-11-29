import { Router } from "express";
import { createElection, listElections, getElection, getResults } from "../controllers/electionController";
import { authMiddleware } from "../middleware/authMiddleware";
import { adminMiddleware } from "../middleware/adminMiddleware";

const router = Router();

router.post("/", authMiddleware, adminMiddleware, createElection);
router.get("/", listElections);
router.get("/:id", getElection);
router.get("/:id/results", getResults);

export default router;
