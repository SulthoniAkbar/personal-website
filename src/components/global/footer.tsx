import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-bold text-gray-700"
        >
          <span className="flex gap-0.5">
            <span className="w-1.5 h-1.5 rounded-sm bg-pink-400" />
            <span className="w-1.5 h-1.5 rounded-sm bg-sky-300" />
            <span className="w-1.5 h-1.5 rounded-sm bg-blue-600" />
            <span className="w-1.5 h-1.5 rounded-sm bg-amber-400" />
          </span>
          <span>Copyright © Created by Muhammad Sulthoni Akbar.</span>
        </Link>
        <div className="flex flex-col items-center md:items-end">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            Social Media
          </span>
          <div className="flex space-x-3">
            <a
              href="https://www.instagram.com/muhammadsultoni71/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-sulthoni-akbar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label="Email"
            >
              <HiOutlineMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
