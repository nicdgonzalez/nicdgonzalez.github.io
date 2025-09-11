"use client";

import { Header } from "@/components/Header";
import { About } from "./_sections/About";
import { Contact } from "./_sections/Contact";
import { Home } from "./_sections/Home";
import { Projects } from "./_sections/Projects";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
