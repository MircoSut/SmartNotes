"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  console.log("session:", session);

  return (
    <div className="bg-black">
      <ul className="flex justify-between p-2 items-center">
        <div>
          <Link href={"/"}>
            {/* logo */}
            <li className="text-xl font-bold text-white">SmartNotes</li>
          </Link>
        </div>
        {session ? (
          <div className="flex flex-row">
            <div className="text-white p-2">{session?.user?.username}</div>
            {/* {console.log(session?.user)} */}
            <button
              onClick={() => signOut()}
              className="text-xl p-2 px-3 bg-blue-800 rounded-full text-white hover:bg-blue-500 rotate-180"
            >
              <MdLogout />
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href={"/login"} className="text-white px-2">
              Login
            </Link>
            <Link
              href={"/register"}
              className="text-white bg-green-400 p-2 rounded-lg"
            >
              Register
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
}
