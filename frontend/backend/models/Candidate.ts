import { Schema, model } from "mongoose";

const CandidateSchema = new Schema({
  name: String,
  party: String
}, { timestamps: true });

export default model("Candidate", CandidateSchema);
