import { useEffect, useState } from "react";
import { fetchLogs, sendNotification } from "../api/notificationApi";

export const useNotifications = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

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
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLogs();
  }, []);

  return {
    logs,
    loading,
    send,
    refresh: loadLogs,
  };
};
