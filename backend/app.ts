import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import electionRoutes from "./routes/electionRoutes";
import voteRoutes from "./routes/voteRoutes";
import adminRoutes from "./routes/adminRoutes";
import { limiter } from "./middleware/rateLimiter";

const app = express();

app.use(cors());
app.use(express.json());
app.use(limiter);

app.use("/api/auth", authRoutes);
app.use("/api/elections", electionRoutes);
app.use("/api/votes", voteRoutes);
app.use("/api/admin", adminRoutes);

export default app;
