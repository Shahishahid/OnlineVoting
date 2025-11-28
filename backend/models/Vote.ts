import { Schema, model } from "mongoose";

const VoteSchema = new Schema({
  election: { type: Schema.Types.ObjectId, ref: "Election" },
  candidate: { type: Schema.Types.ObjectId, ref: "Candidate" },
  voter: { type: Schema.Types.ObjectId, ref: "User" },
  ip: String,
  device: String
}, { timestamps: true });

export default model("Vote", VoteSchema);
