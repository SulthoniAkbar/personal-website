"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-200 text-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-center">
        <Link
          href="/"
          className="absolute left-6 flex items-center gap-2 text-lg font-bold tracking-wider hover:text-gray-600 transition"
        >
          <span className="flex gap-0.5">
            <span className="w-2 h-2 rounded-sm bg-pink-400" />
            <span className="w-2 h-2 rounded-sm bg-sky-300" />
            <span className="w-2 h-2 rounded-sm bg-blue-600" />
            <span className="w-2 h-2 rounded-sm bg-amber-400" />
          </span>
          <span>Sulthoni Akbar</span>
        </Link>
        <div className="rounded-full border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm">
          Portofolio
        </div>
      </div>
    </nav>
  );
}
