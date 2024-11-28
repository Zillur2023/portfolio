'use client'
import AboutMe from "@/components/AboutMe";
import { Approach } from "@/components/Approach";
import { Blog } from "@/components/Blog";
import { Contact, ContactForm } from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Technology } from "@/components/Technology";

export default function Home() {
  return (
    // <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 my-20">
   <main className="flex flex-col items-center">
  <div className="space-y-10 max-w-4xl w-full">
    <section>
      <Hero />
    </section>
    <section>
      <Approach />
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <Technology />
    </section>
    <section>
      <Blog />
    </section>
    <section>
      <Contact />
    </section>
  </div>
</main>
  );
}
