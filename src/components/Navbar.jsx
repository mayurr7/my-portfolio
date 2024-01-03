import React, { useState } from "react";

import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className="top-0 z-10 block w-full transition-all duration-300"
      id="navbar"
    >
      <div className="flex flex-wrap items-center justify-between px-9 md:py-4 bg-white/[.9] dark:bg-slate-900 backdrop-blur-sm transition-shadow duration-300">
        <a href="#" onClick={() => setActiveNav("#")}>
          <div className="transition-all duration-500 motion-reduce:transition-none opacity-1 blur-0">
            <div>
              <div className="flex items-center space-x-2 py-4 md:py-1 drop-shadow-lg bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
                <p>&lt;</p>
                <p className="text-5xl md:text-7xl" id="custom-logo">
                  B.S.B
                </p>
                <p>/&gt;</p>
              </div>
            </div>
          </div>
        </a>
        <div
          className="items-center hidden w-full xl:block xl:w-auto"
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium xl:p-0 xl:flex-row xl:space-x-8 xl:mt-0">
            <li className="transition-all motion-reduce:transition-none duration-500 delay-[50ms] translate-y-0 opacity-1">
              <a
                href="#about"
                className="block py-2 pl-3 pr-4 router-link-active router-link-exact-active hover:text-[#4305ba]"
                onClick={() => setActiveNav("#about")}
              >
                About
              </a>
            </li>
            <li className="transition-all motion-reduce:transition-none duration-500 delay-[100ms] translate-y-0 opacity-1">
              <a
                // aria-current="page"
                href="#experience"
                className="router-link-active router-link-exact-active block py-2 pl-3 pr-4 hover:text-[#4305ba]"
                onClick={() => setActiveNav("#experience")}
              >
                Experience
              </a>
            </li>
            <li className="transition-all motion-reduce:transition-none duration-500 delay-[150ms] translate-y-0 opacity-1">
              <a
                // aria-current="page"
                href="#work"
                className="router-link-active router-link-exact-active block py-2 pl-3 pr-4 hover:text-[#4305ba]"
              >
                Work
              </a>
            </li>
            <li className="transition-all motion-reduce:transition-none duration-500 delay-[200ms] translate-y-0 opacity-1">
              <a
                // aria-current="page"
                href="#contact"
                className="router-link-active router-link-exact-active block py-2 pl-3 pr-4 hover:text-[#4305ba]"
              >
                Contact
              </a>
            </li>
            {/* <li class="transition-all motion-reduce:transition-none duration-500 delay-[250ms] translate-y-0 opacity-1">
              <a
                href="https://docs.google.com/document/d/1Sa_sK3RMusoezzgzxu8LkV16i2Jra2qd/edit?usp=sharing&amp;ouid=113657039181859132688&amp;rtpof=true&amp;sd=true"
                target="_blank"
              >
                <button class="block py-2 px-6 bg-transparent border border-button-color shadow-sm shadow-button-color text-button-color transition ease-in-out hover:bg-button-color hover:text-white hover:dark:text-slate-300 focus:bg-button-color focus:text-white active:bg-button-color active:text-white duration-300">
                  Resume
                </button>
              </a>
            </li> */}
            <li className="transition-all motion-reduce:transition-none duration-500 delay-[250ms] translate-y-0 opacity-1">
              <button className="block py-2 " onClick={toggleDarkMode}>
                <MdDarkMode class="h-7 w-7 text-slate-300 hover:text-button-color" />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  class="h-7 w-7 text-slate-300 hover:text-button-color"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clip-rule="evenodd"
                  ></path>
                </svg> */}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
