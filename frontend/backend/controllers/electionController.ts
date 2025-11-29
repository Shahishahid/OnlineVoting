import { Request, Response } from "express";
import Election from "../models/Election";

export const createElection = async (req: Request, res: Response) => {
  try {
    const election = await Election.create(req.body);
    res.json(election);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const listElections = async (req: Request, res: Response) => {
  const elections = await Election.find().populate("candidates");
  res.json(elections);
};

export const getElection = async (req: Request, res: Response) => {
  const election = await Election.findById(req.params.id).populate("candidates");
  res.json(election);
};

export const getResults = async (req: Request, res: Response) => {
  res.json({ message: "Aggregated results will come here" });
};
