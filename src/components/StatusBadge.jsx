export default function StatusBadge({ status }) {
  const color = status === "SENT" ? "text-green-600" : "text-red-600";

  return <span className={`font-semibold ${color}`}>{status}</span>;
}
