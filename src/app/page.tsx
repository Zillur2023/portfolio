'use client'
import { Approach } from "@/components/Approach";
import { Blog } from "@/components/Blog";
import ContactMe from "@/components/ContactMe";
import { FloatingDock } from "@/components/FloatingDock";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <Hero/>
      <Projects/>
      <div className=" pl-20 ml-10 text-center"><FloatingDock icon={<img src={"/next.svg"} alt="icon5" className="h-full w-full text-neutral-500 dark:text-neutral-300" />}  /></div>
      <Approach /> 
      <ContactMe/>
      <Blog/>
    </div>
  </main>
  );
}
