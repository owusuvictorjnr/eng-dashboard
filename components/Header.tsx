"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="w-full p-4 border-b shadow-md flex justify-between items-center">
      <div className="bg-gray-300 rounded-md py-2 px-4">
        <h2 className="">logo</h2>
      </div>

      <div className="flex items-center space-x-4">
        <h2 className="text-lg font-semibold">Engineering Dashboard</h2>
      </div>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Sign In
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Sign Up
        </button>
      </div> */}
    </header>
  );
}
