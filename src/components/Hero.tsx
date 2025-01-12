'use client'
import React from "react";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffectSmooth ";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import BorderMagicBtn from "./ui/BorderMagicBtn";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub , FaPhone   } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from "react-icons/ti";

import { MovingBorder } from "./ui/MovingBorder";
import MyImage from "./ui/MyImage";
import Link from "next/link";


const Hero = () => {
  const name = [
    {
      text: "Zillur",
    },
    {
      text: "Rahman",
    },
    // {
    //   text: "Aceternity.",
    //   className: "text-blue-500 dark:text-blue-500",
    // },
  ];
  
  const aboutMe = `I am a full-stack developer with a passion for creating efficient, user-focused web applications. Combining creativity and technical expertise, I deliver innovative solutions that drive results.`;

  return (
   <div className=" px-10">
     <div className="flex flex-col md:flex-row ">
      <div className=" pl-10 flex-1 flex justify-center items-center order-2 md:order-1">
        <div className=" text-center md:text-left mb-5 ">
        <h2 className=" title">Hi, I am</h2>
           {/* <h2 className=" text-3xl font-semibold">Zillur Rahman</h2> */}
           <div className=" flex items-center justify-center md:justify-start"><TypewriterEffectSmooth words={name} /></div>
           <TextGenerateEffect words={aboutMe} />
           <div className="my-3 space-y-2 text-xs font-thin text-neutral-600 dark:text-neutral-300">
  <div className="flex justify-center md:justify-start items-center gap-2">
    <FaLocationDot />
    <span>Mymensingh, Bangladesh</span>
  </div>
  <div className="flex justify-center md:justify-start items-center gap-2">
    <FaPhone />
    <span>+880 1999602203</span>
  </div>
  <div className="flex justify-center md:justify-start items-center gap-2">
    <MdOutlineMailOutline />
    <span>zillurrahmanbd12@gmail.com</span>
  </div>
</div>
           {/* <p>I am a full-stack developer with a passion for creating efficient, user-focused web applications. Combining creativity and technical expertise, I deliver innovative solutions that drive results.</p> */}
           {/* <button className=" bg-blue-500 px-2 py-1 rounded-md mt-3">Download Resume</button> */}
           <div className="flex items-center flex-col md:flex-row gap-5">
           <BorderMagicBtn btn="Download Resume" className=" h-8 w-36" />
           <div className=" flex items-center justify-center md:justify-start gap-4 md:ml-7 mt-3">
             <Link href={"https://github.com/zillur2023"}>
             <BorderMagicBtn btn={<FaGithub size={23} />} className=" h-8 w-8" />
             </Link>
             <BorderMagicBtn btn={<TiSocialLinkedinCircular size={30} />} className=" h-8 w-8" />
           </div>
           </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center order-1 md:order-2 ">
      {/* <img src="download (1).jpeg" className=" border-2 border-white-200 border-dashed rounded-full p-1"/> */}
      {/* <img src="download (1).jpeg" className=" border-2 border-white-200 border-dashed rounded-full p-1"/> */}
       {/* <BorderMagicBtn btn={<img src="download (1).jpeg" className="  p-1"/>} /> */}
       <div className=" grid place-items-center lg:place-items-end"><MyImage/></div>
      {/* <img src="/bg.png"/> */}
      </div>
    </div>
    <div className=" grid place-items-center">
    <MovingBorder
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  //   add these two
                  //   you can generate the color from here https://cssgradient.io/
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  // add this border radius to make it more rounded so that the moving border is more realistic
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                // remove bg-white dark:bg-slate-900
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
               <div className=" flex  items-center justify-evenly ">
                <div className=" p-5">
                {/* <p className="font-semibold lg:text-2xl md:text-lg  text-base"> 1+ </p> */}
                <p className="title"> 1+ </p>
                <p className="title">Years Experiences</p>
                </div>
                <div className=" p-5">
                <p className="title"> 10+ </p>
                <p className="title">Projects completed</p>
                </div>
               </div>
              </MovingBorder>
    </div>
    
   </div>

  );
};

export default Hero;
