import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Next News
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white"
            onClick={toggleNavbar}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? "block" : "hidden"
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-md lg:flex-grow flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col lg:flex-row">
              <Link
                href="/technews"
                className="text-gray-400 hover:text-white mx-4 my-2 lg:my-0"
              >
                Technology
              </Link>
              <Link
                href="/businessnews"
                className="text-gray-400 hover:text-white mx-4 my-2 lg:my-0"
              >
                Business
              </Link>
              <Link
                href="/sportsnews"
                className="text-gray-400 hover:text-white mx-4 my-2 lg:my-0"
              >
                Sports
              </Link>
              <Link
                href="/memes"
                className="text-gray-400 hover:text-white mx-4 my-2 lg:my-0"
              >
                Memes
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row">
              <Link
                href="/"
                className="text-gray-800 hover:text-white text-center mx-4 my-2 lg:my-0 border-slate-700 border-2 p-1.5 rounded-xl bg-gray-300 hover:bg-gray-400"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-800 text-center hover:text-white mx-4 my-2 lg:my-0 border-slate-700 border-2 p-1.5 rounded-xl bg-gray-300 hover:bg-gray-400"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-white text-center mx-4 my-2 lg:my-0 border-slate-700 border-2 p-1.5 rounded-xl bg-gray-300 hover:bg-gray-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
