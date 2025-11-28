import axios from "axios";

export const fraudCheck = async (data: any) => {
  const res = await axios.post("http://localhost:8001/fraud-score", data);
  return res.data;
};
