import React from "react";

const Hero = () => {
  return (
   <div>
     <div className="flex flex-col lg:flex-row ">
      <div className="flex-1 flex justify-center items-center order-2 lg:order-1">
        <div>
        <h2 className=" text-3xl font-semibold">Hi, I am</h2>
           <h2 className=" text-3xl font-semibold">Zillur Rahman</h2>
           <p>I am a full-stack developer with a passion for creating efficient, user-focused web applications. Combining creativity and technical expertise, I deliver innovative solutions that drive results.</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
      <img src="/p1.svg"/>
      </div>
    </div>
   </div>
    // <div className="relative z-20 py-0 lg:py-0 max-w-7xl mx-auto ">
    //        <div className="relative ">
    //     <div className="grid grid-cols-1 lg:grid-cols-6 mt-5 xl:border rounded-md dark:border-neutral-800">
    //       {features.map((feature) => (
    //         <FeatureCard key={feature.title} className={feature.className}>
    //           <FeatureTitle>{feature.title}</FeatureTitle>
    //           <FeatureDescription>{feature.description}</FeatureDescription>
    //           <div className=" h-full w-full">{feature.skeleton}</div>
    //         </FeatureCard>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
