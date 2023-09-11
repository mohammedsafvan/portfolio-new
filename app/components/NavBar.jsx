"use client";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="px-10 font-montserrat flex-col justify-center fixed top-0 left-0 bg-lightColor dark:bg-darkColor w-screen ">
        <div className=" flex  h-20 w-full  items-center justify-between">
          <div>
            <h1 className="font-semibold text-4xl">MS.</h1>
          </div>
          <div className={`hidden  md:flex md:flex-row space-x-4`}>
            <div className=" ">Projects</div>
            <div className=" ">Projects</div>
            <div className=" ">Projects</div>
          </div>
          <div>
            <ThemeSwitcher />
            <button
              onBlur={() => setMenu(false)}
              onClick={() => setMenu(!menu)}
              className="text-gray-400 hover:text-gray-800 focus:outline-none  md:hidden focus:text-gray-800"
            >
              <FiMenu size={30} />
            </button>
          </div>
        </div>
        <div
          className={` z-10  md:hidden mt-2  bg-gradient-to-tr rounded-2xl  from-pink-500 via-red-500 to-yellow-500 p-[1.5px] ${
            !menu ? "hidden" : ""
          }`}
        >
          <div
            className={`flex px-3 font-montserrat rounded-2xl flex-col bg-lightColor dark:bg-darkColor py-2  `}
          >
            {/* //TODO: dark:hover */}
            <a
              href="#"
              className="block font-montserrat  p-4 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              Projects
            </a>
            <a
              href=""
              className="block font-montserrat  p-4 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              Resume
            </a>
            <a
              href=""
              className="block font-montserrat  p-4 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              Contact
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
