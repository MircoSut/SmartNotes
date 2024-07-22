"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black">
      <ul className="flex justify-between p-2 items-center">
        <div>
          <Link href={"/"}>
            {/* logo */}
            <li className="text-xl font-bold text-white">SmartNotes</li>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="text-white px-2">Login</div>
          <div className="text-white bg-green-400 p-2 rounded-lg">Register</div>
        </div>
      </ul>
    </div>
  );
}
