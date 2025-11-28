import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: String,
  role: { type: String, default: "voter" }
}, { timestamps: true });

export default model("User", UserSchema);
