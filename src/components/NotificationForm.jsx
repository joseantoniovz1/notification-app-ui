import { useState } from "react";

export default function NotificationsForm({ onSend, loading }) {
  const [category, setCategory] = useState("SPORTS");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) {
      alert("Message cannot be empty");
      return;
    }

    onSend({ category, message });
    setMessage("");
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Send Notification</h2>

      <div className="space-y-4">
        <select
          className="w-full border rounded-lg p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="SPORTS">Sports</option>
          <option value="FINANCE">Finance</option>
          <option value="MOVIES">Movies</option>
        </select>

        <textarea
          className="w-full border rounded-lg p-2 h-28"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}
