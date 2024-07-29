"use client";
import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";
import { useSession } from "next-auth/react";

export default function MainNavbar() {
  const { data: session } = useSession();
  console.log("session:", session);
  return (
    <div className="bg-black">
      <ul className="flex justify-between p-2 items-center">
        <div className="text-white font-extrabold text-2xl">SmartNotes</div>
        {/* Searchbar */}
        {/* AI Chatbot */}
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
      </ul>
    </div>
  );
}
