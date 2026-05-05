export default function Toast({ message, type }) {
  console.log("Testing: " + message + " Type: " + type);
  const bg = type === "success" ? "bg-green-600" : "bg-red-600";

  return (
    <div
      className={`fixed top-4 right-4 text-white px-4 py-2 rounded shadow ${bg}`}
    >
      {message}
    </div>
  );
}
