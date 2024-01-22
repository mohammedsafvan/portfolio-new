"use client";
import { ThemeProvider } from "next-themes";
import Hero from "./Hero";

const Layout = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Hero />
    </ThemeProvider>
  );
};
export default Layout;
