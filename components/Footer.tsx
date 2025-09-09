"use client";

export default function Footer() {
  return (
    <footer className="w-full p-4 border-t shadow-md flex justify-between items-center">
      <p className="text-sm text-gray-500">
        © 2024 Engineering Dashboard. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-sm text-blue-500 hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="text-sm text-blue-500 hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
