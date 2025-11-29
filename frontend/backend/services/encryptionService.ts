import crypto from "crypto";

export const encrypt = (text: string) => {
  return crypto.createHash("sha256").update(text).digest("hex");
};
