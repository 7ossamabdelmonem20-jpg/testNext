
"use server"

export async function addUser(formData) {
  const name = formData.get("name");

  await fetch("http://localhost:3000/api/users", {
    method: "POST",
    body: JSON.stringify({ name }),
  });
}