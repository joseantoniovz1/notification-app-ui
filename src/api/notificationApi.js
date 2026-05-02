const API_URL = "http://localhost:8080/api/notifications";

export const sendNotification = async (payload) => {
  const res = await fetch(API_URL, {
    method: "POST",

    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Failed to send notification");
};

export const fetchLogs = async () => {
  const res = await fetch(`${API_URL}/history`);
  if (!res) throw new Error("Failed to fetch logs");

  return res.json();
};
