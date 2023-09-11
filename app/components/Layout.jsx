"use client";
import { ThemeProvider } from "next-themes";
import NavBar from "./NavBar";
import Hero from "./Hero";

const Layout = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NavBar />
      <Hero />
      {/* <Hero /> */}
    </ThemeProvider>
  );
};
export default Layout;
