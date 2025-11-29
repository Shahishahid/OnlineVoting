import { Request, Response } from "express";
import Vote from "../models/Vote";
import AuditLog from "../models/AuditLog";
import axios from "axios";

export const castVote = async (req: Request, res: Response) => {
  try {
    const voterId = (req as any).user.id;

    const { electionId, candidateId, ip, device, userAgent } = req.body;

    // 🛡 Fraud check (Python microservice)
    const fraudRes = await axios.post("http://localhost:8001/fraud-score", {
      ip,
      device,
      user_agent: userAgent
    });

    if (fraudRes.data.score > 70) {
      await AuditLog.create({
        event: "High-risk vote blocked",
        voter: voterId,
        riskScore: fraudRes.data.score
      });
      return res.status(403).json({ message: "Fraud detected" });
    }

    const vote = await Vote.create({
      election: electionId,
      candidate: candidateId,
      voter: voterId,
      ip,
      device,
    });

    res.json({ message: "Vote recorded", vote });
  } catch (error) {
    res.status(500).json({ error });
  }
};
