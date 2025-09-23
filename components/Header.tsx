"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="w-full p-4 border-b shadow-md flex justify-between items-center sticky top-0 bg-white">
      <div className="bg-gray-400 rounded-md py-2 px-4 hover:bg-gray-200 hover:transform hover:duration-500">
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
