import React from "react";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffectSmooth ";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import BorderMagicBtn from "./ui/BorderMagicBtn";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub ,FaLinkedinIn   } from 'react-icons/fa';
import { TbBrandLinkedinFilled } from "react-icons/tb";


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
   <div className=" mt-10">
     <div className="flex flex-col lg:flex-row ">
      <div className="flex-1 flex justify-center items-center order-2 lg:order-1">
        <div>
        <h2 className=" title">Hi, I am</h2>
           {/* <h2 className=" text-3xl font-semibold">Zillur Rahman</h2> */}
           <TypewriterEffectSmooth words={name} />
           <TextGenerateEffect words={aboutMe} />
           <div className=" my-3 ">
              <p className=" flex  justify-start items-center gap-3 text-xs font-thin mb-1"><FaLocationDot /> Mymensingh, Bangladesh</p>
              <p className=" flex  justify-start items-center gap-3 text-xs font-thin"><MdOutlineMailOutline /> Zillurrahmanbd12@gmail.com</p>
            </div>
           {/* <p>I am a full-stack developer with a passion for creating efficient, user-focused web applications. Combining creativity and technical expertise, I deliver innovative solutions that drive results.</p> */}
           {/* <button className=" bg-blue-500 px-2 py-1 rounded-md mt-3">Download Resume</button> */}
           <BorderMagicBtn btn="Download Resume" className=" h-8 w-36" />
           <div className=" flex items-center justify-start gap-4 ml-7 mt-3">
             <BorderMagicBtn btn={<FaGithub size={25} />} className=" h-8 w-8" />
             <BorderMagicBtn btn={<TbBrandLinkedinFilled   size={25} />} className=" h-8 w-8" />
           </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
      <img src="download (1).jpeg"/>
      {/* <img src="/bg.png"/> */}
      </div>
    </div>
   </div>

  );
};

export default Hero;
