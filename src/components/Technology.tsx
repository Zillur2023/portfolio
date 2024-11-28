"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


export const Technology = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  // const images = ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"]
  const items = [
     {
      variants: first,
      src:"/next.svg",
      text: "Next js"
     },
     {
      variants: first,
      src:"/tail.svg",
      text: "Tainwind css"
     },
     {
      variants: first,
      src:"/ts.svg",
      text: "Typescript"
     },
     {
      variants: first,
      src:"/three.svg",
      text: "Three"
     },
     {
      variants: first,
      src:"/three.svg",
      text: "Three"
     },
     {
      variants: first,
      src:"/three.svg",
      text: "Three"
     },
     
  ]
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className=" "
    >
      <h1 className="heading ">Technologies</h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
          {
       items?.map(item => (
          <div key={item?.text} className=" flex justify-center items-center">
          <motion.div
        variants={item?.variants}
        className="h-full w-full rounded-2xl bg-white  dark:bg-black  flex flex-col items-center justify-center"
      >
        {/* <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        /> */}
        <div className=" w-16 h-16">

        <img src={item?.src} alt="icon5" className="rounded-full h-full w-full " />
        </div>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          {item?.text}
        </p>
        {/* <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          {item?.text}
        </p> */}
      </motion.div>
     </div>
        ))
      }
            
</div>
    
    </motion.div>
  );
};


