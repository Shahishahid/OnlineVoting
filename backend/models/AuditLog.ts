import { Schema, model } from "mongoose";

const AuditLogSchema = new Schema({
  event: String,
  voter: { type: Schema.Types.ObjectId, ref: "User" },
  riskScore: Number
}, { timestamps: true });

export default model("AuditLog", AuditLogSchema);
