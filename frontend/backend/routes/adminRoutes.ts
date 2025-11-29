import { Router } from "express";
import { listAuditLogs } from "../controllers/auditController";
import { authMiddleware } from "../middleware/authMiddleware";
import { adminMiddleware } from "../middleware/adminMiddleware";

const router = Router();

router.get("/audit-logs", authMiddleware, adminMiddleware, listAuditLogs);

export default router;
