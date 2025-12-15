"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-zinc-100 dark:border-zinc-800">
        <p>© {new Date().getFullYear()} Azzeddine. All rights reserved.</p>
      </footer>
    </main>
  );
}
