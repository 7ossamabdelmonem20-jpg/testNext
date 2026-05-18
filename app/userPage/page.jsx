"use client";

import React, { useState } from "react";

export default function UsersPage() {
  const [showUsers, setShowUsers] = useState(false);

  const users = [
    { id: 1, name: "Hossam" },
    { id: 2, name: "Ahmed" },
    { id: 3, name: "Ali" },
    { id: 4, name: "mo" },
  ];

  return (
    <div className="p-5">
      <button
        onClick={() => setShowUsers(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Show Users
      </button>

      {showUsers && (
        <div className="mt-5 space-y-3">
          {users.map((user) => (
            <div key={user.id} className="border p-3 rounded">
              <h2>{user.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
