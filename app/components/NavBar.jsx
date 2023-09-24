"use client";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="px-10 font-montserrat flex-col justify-center fixed top-0 left-0 shadow-lg backdrop-blur-sm bg-white/40 dark:bg-darkColor/30 w-screen ">
        <div className=" flex  h-20 w-full  items-center justify-between">
          <div>
            <h1 className="font-semibold text-4xl">MS.</h1>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
