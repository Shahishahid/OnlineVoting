import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import { signToken } from "../config/jwt";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already used" });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, passwordHash: hash, role });

    res.json({ message: "User registered", id: user._id });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const passOk = await bcrypt.compare(password, user.passwordHash);
    if (!passOk) return res.status(401).json({ message: "Invalid credentials" });

    const token = signToken({ id: user._id, role: user.role });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};
