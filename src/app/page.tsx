'use client'
import { Approach } from "@/components/Approach";
import { Contact, ContactForm } from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Service from "@/components/Service";
import { Technology } from "@/components/Technology";
import { useUser } from "@/lib/UserProvider";

export default function Home() {
   const { user } = useUser()

  return (
    // <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 my-20">
   <main className="flex flex-col items-center">
  <div className="space-y-10 max-w-5xl w-full">
    <section>
      <Hero />
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <Technology />
    </section>
    <section>
      <Service />
    </section>
    <section>
      <Approach />
    </section>
    <section>
      <Contact />
    </section>
  </div>
</main>
  );
}
