"use client";

import { useState } from "react";
import { addUser } from "@/app/updateuser/adduser";

export default function Page() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  async function getUsers() {
    const res = await fetch("http://localhost:3000/api/users");
    const data = await res.json();

    setUsers(data);
    setShowUsers(true);
  }

  return (
    <div>
      <form action={addUser} className="flex gap-2 mb-5">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className="border p-2"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add User
        </button>
      </form>

      <button
        onClick={getUsers}
        className="bg-green-500 text-white px-4 py-2 mb-5"
      >
        Show Users
      </button>

      {showUsers && (
        <div className="space-y-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="border p-2 rounded"
            >
              {user.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}