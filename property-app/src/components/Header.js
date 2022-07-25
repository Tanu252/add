import { Outlet, Link } from "react-router-dom";

import React from "react";

export default function Header() {
  return (
    <>
      <div class="header-2 ">
        <nav class=" py-2 md:py-4 bg-[#3E3F43]">
          <div class="container px-4 mx-auto md:flex md:items-center">
            <div class="flex justify-between items-center">
              <Link to="/" class="font-bold text-xl text-white no-underline">
                Residence
              </Link>
              <button
                class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                id="navbar-toggle"
              >
                <i class="fas fa-bars"></i>
              </button>
            </div>

            <div
              class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              id="navbar-collapse"
            >
              <Link
                to="/"
                class="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300  no-underline"
              >
                Home
              </Link>
              {/* <Link
                to="/"
                class="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300 no-underline"
              >
                About
              </Link> */}

              <Link
                to="/Login"
                class="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300 no-underline"
              >
                Login
              </Link>
              <Link
                to="/Sign"
                class="p-2 lg:px-4 md:mx-2 text-white no-underline no-underlinetext-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
              >
                Signup
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
