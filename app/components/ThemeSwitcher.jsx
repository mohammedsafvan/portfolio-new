"use client";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="pr-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <MdDarkMode color={"gray"} size={30} />
    </button>
  );
};
