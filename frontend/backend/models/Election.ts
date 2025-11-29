import { Schema, model } from "mongoose";

const ElectionSchema = new Schema({
  title: String,
  startsAt: Date,
  endsAt: Date,
  candidates: [{ type: Schema.Types.ObjectId, ref: "Candidate" }]
}, { timestamps: true });

export default model("Election", ElectionSchema);
