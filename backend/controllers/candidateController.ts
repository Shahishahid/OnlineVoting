import { Request, Response } from "express";
import Candidate from "../models/Candidate";

export const addCandidate = async (req: Request, res: Response) => {
  try {
    const candidate = await Candidate.create(req.body);
    res.json(candidate);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const listCandidates = async (req: Request, res: Response) => {
  const candidates = await Candidate.find();
  res.json(candidates);
};
