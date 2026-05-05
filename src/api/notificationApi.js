import axiosClient from "./axiosClient";

export const sendNotification = async (payload) => {
  await axiosClient.post("", payload);
};

export const fetchLogs = async () => {
  const res = await axiosClient.get("/history");
  return res.data;
};
