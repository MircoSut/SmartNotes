"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const resAlreadyExists = await fetch("/api/alreadyExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username }),
      });

      const { usernameInUse, emailInUse } = await resAlreadyExists.json();

      if (usernameInUse) {
        setError("Username already used.");
        return;
      }
      if (emailInUse) {
        setError("Email already used.");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        const data = await res.json();
        setError(data.error || "User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="grid place-items-center h-screen bg-black">
      <div className="bg-white shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Username"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-white w-full text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link href={"/login"} className="text-sm mt-3 text-right">
            Already have an account?{" "}
            <span className="hover:underline text-blue-500">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
