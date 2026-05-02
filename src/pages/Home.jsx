import NotificationForm from "../components/NotificationForm";
import LogsTable from "../components/LogsTable";
import { useNotifications } from "../hooks/useNotifications";

export default function Home() {
  const { logs, loading, send, refresh } = useNotifications();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <NotificationForm onSend={send} loading={loading} />
        <LogsTable logs={logs} onRefresh={refresh} />
      </div>
    </div>
  );
}
