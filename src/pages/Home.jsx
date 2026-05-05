import NotificationForm from "../components/NotificationForm";
import LogsTable from "../components/LogsTable";
import Pagination from "../components/Pagination";
import { useNotifications } from "../hooks/useNotifications";
import Toast from "../components/Toast";

export default function Home() {
  const { logs, loading, send, toast, page, totalPages, setPage } =
    useNotifications();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {toast && <Toast message={toast.message} type={toast.type} />}
      <div className="max-w-4xl mx-auto space-y-6">
        <NotificationForm onSend={send} loading={loading} />
        <LogsTable logs={logs} />
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
