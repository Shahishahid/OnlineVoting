import AuditLog from "../models/AuditLog";

export const recordAudit = async (event: string, voter: string, score: number) => {
  await AuditLog.create({ event, voter, riskScore: score });
};
