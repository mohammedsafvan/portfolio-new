"use client";
import { ThemeProvider } from "next-themes";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Projects from "./Projects";

const Layout = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NavBar />
      <Hero />
      <Projects />
    </ThemeProvider>
  );
};
export default Layout;
