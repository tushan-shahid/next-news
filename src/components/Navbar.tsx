import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Next News</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-md lg:flex-grow flex justify-between">
          <div className="flex">
            <Link
              href="/technews"
              className="text-gray-400 hover:text-white mx-4 "
            >
              Technology
            </Link>
            <Link
              href="/businessnews"
              className="text-gray-400 hover:text-white mx-4"
            >
              Business
            </Link>
            <Link
              href="/sportsnews"
              className="text-gray-400 hover:text-white mx-4"
            >
              Sports
            </Link>
            <Link href="/memes" className="text-gray-400 hover:text-white mx-4">
              Memes
            </Link>
          </div>
          <div className="flex">
            <Link
              href="/"
              className="text-gray-800 hover:text-white mx-4 border-slate-700 border-2 p-1.5 rounded-xl bg-gray-300  hover:bg-gray-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-white mx-4 border-slate-700 border-2 p-1.5 rounded-xl bg-gray-300  hover:bg-gray-400"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-white mx-4 border-slate-700 border-2 p-1.5 rounded-xl bg-gray-300 hover:bg-gray-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
