import { Request, Response } from "express";
import AuditLog from "../models/AuditLog";

export const listAuditLogs = async (req: Request, res: Response) => {
  const logs = await AuditLog.find().sort({ createdAt: -1 });
  res.json(logs);
};
