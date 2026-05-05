import { useEffect, useState } from "react";
import { fetchLogs, sendNotification } from "../api/notificationApi";

export const useNotifications = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

  const loadLogs = async () => {
    try {
      const data = await fetchLogs();
      setLogs(data);
    } catch (err) {
      console.error(err);
    }
  };

  const send = async (payload) => {
    setLoading(true);
    try {
      await sendNotification(payload);
      await loadLogs();
      setToast({ message: "Notification sent!", type: "success" });
    } catch (err) {
      console.error(err);
      setToast({ message: "Failed to send", type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  useEffect(() => {
    loadLogs();
  }, []);

  const totalPages = Math.ceil(logs.length / pageSize);

  const paginatedLogs = logs.slice((page - 1) * pageSize, page * pageSize);

  return {
    logs: paginatedLogs,
    loading,
    send,
    toast,
    page,
    totalPages,
    setPage,
  };
};
