import StatusBadge from "./StatusBadge";

export default function LogsTable({ logs }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Notification Logs</h2>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Date</th>
            <th className="p-2">User</th>
            <th className="p-2">Channel</th>
            <th className="p-2">Category</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {logs.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No logs yet
              </td>
            </tr>
          )}

          {logs.map((log) => (
            <tr key={log.id} className="border-t">
              <td className="p-2">
                {new Date(log.timestamp).toLocaleString()}
              </td>
              <td className="p-2">{log.userName}</td>
              <td className="p-2">{log.channel}</td>
              <td className="p-2">{log.category}</td>
              <td className="p-2">
                <StatusBadge status={log.notificationStatus} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
