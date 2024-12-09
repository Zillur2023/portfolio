"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { FloatingDock } from "./FloatingDock";
import { useUser } from "@/lib/UserProvider";
import { PinContainer } from "./ui/PinContainer";
import { CiMenuKebab } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem } from "./ui/Menu";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FileUpload } from "./ui/FileUpload";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};



const Projects = () => {
  const { user } = useUser()
  console.log({user})
  // const [active, setActive] = useState<React.ReactNode | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  
    // console.log(files);
    
  };


  return (
    <div className="">
      <h1 className="heading">
        Projects
      </h1>
      <div className="flex flex-wrap items-center justify-between  ">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div 
              onMouseLeave={() => setActive(null)}
              className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
        <div 
                  
                   onMouseEnter={() => setActive(item?.id)}
                  // onClick={() => setActive(null)}
                  //  onClick={() => setActive(item?.id)}
                  className=" absolute top-3 right-3 z-20 text-2xl text-gray-300 cursor-pointer"
                  // className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
                  // className={cn("absolute top-3 right-3 z-50 text-2xl text-gray-300 cursor-pointer", className)}
                >               
      <motion.div
        transition={{ duration: 0.3 }}
        className=" relative cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {<CiMenuKebab />}
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item?.id && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2  transform -translate-x-1/2 pt-0">
             {/* <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"> */}
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                 <div className=" flex flex-col space-y-4 text-sm">
                 {/* <Link href={""}  className="text-neutral-700 dark:text-neutral-200 hover:text-black ">Update</Link> */}
                 <motion.div>
                  <FileUpload onChange={handleFileUpload} />
                 </motion.div>
                 <Link href={""}  className="text-neutral-700 px-2 py-1 rounded-md dark:text-neutral-200 hover:bg-red-500 hover:text-black ">Delete</Link>
                 
                 </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
                </div>
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-semibold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

                 
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex -space-x-3">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                      // style={{
                      //   transform: `translateX(-${5 * index + 2}px)`,
                      // }}
                    >
                      {/* <img src={icon} alt="icon5" className="p-2" /> */}
                      <FloatingDock icon={<img src={icon} alt="icon5" className=" w-full h-full  " />} />
                   
    
                    </div>
                  ))}
                     
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;