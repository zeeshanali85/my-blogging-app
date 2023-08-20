import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div>
        <header className="text-gray-600 body-font bg-orange-500">
          <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
            <span className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <Link href="/" className="ml-3 text-xl">
                Personal Blogging App
              </Link>
            </span>

            <Link
              href="/login"
              className="inline-flex items-center mx-5 bg-orange-300 border-0 py-1 px-3 focus:outline-none hover:bg-orange-400 rounded text-base mt-4 md:mt-0"
            >
              Create
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
            <Link
              href="/signup"
              className="inline-flex items-center bg-orange-300 border-0 py-1 px-3 focus:outline-none hover:bg-orange-400 rounded text-base mt-4 md:mt-0"
            >
              signup
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center mx-5 bg-orange-300 border-0 py-1 px-3 focus:outline-none hover:bg-orange-400 rounded text-base mt-4 md:mt-0"
            >
              Login
            </Link>
          </div>
        </header>
      </div>
  
    </>
  );
}
