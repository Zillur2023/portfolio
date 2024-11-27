import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between items-center gap-9">
      <div>
           <h2 className=" text-3xl font-semibold">Hi, I am</h2>
           <h2 className=" text-3xl font-semibold">Zillur Rahman</h2>
           <p>I am a full-stack developer with a passion for creating efficient, user-focused web applications. Combining creativity and technical expertise, I deliver innovative solutions that drive results.</p>
      </div>
      <img src="/p1.svg"/>
    </div>
  );
};

export default Hero;
