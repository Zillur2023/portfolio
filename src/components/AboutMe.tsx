
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";


const AboutMe = () => {

    return (
      <div className=" mt-10">
          <div className="flex flex-col lg:flex-row ">
          <div className="flex-1 flex justify-center items-center order-1 lg:order-1">
           {/* <img src="download (1).jpeg"/> */}
           <FcBusinessman size={300} />
           {/* <img src="/bg.png"/> */}
           </div>
           <div className="flex-1 flex justify-center items-center order-2 lg:order-2">
             <div>
             <h2 className=" text-3xl font-semibold">About Me</h2>
                <p>I'm a frontend-focused MERN developer with expertise in Next.js, React, and TypeScript for building dynamic, responsive web apps. I use Redux for state management, Tailwind CSS for clean designs, and JavaScript for interactive features. On the backend, I work with Node.js, Express, Mongoose, and MongoDB, implementing secure authentication with JWT.</p>
                <div className=" flex items-center justify-center gap-9 mt-8">
                  <button className=" bg-blue-500 px-2 py-1 rounded-md">Download Resume</button>
                  <span className=" ">
                  <p className=" flex  justify-start items-center gap-3"><FaLocationDot /> Mymensingh, Bangladesh</p>
                  <p className=" flex  justify-start items-center gap-3"><MdOutlineMailOutline /> Zillurrahmanbd12@gmail.com</p>
                  </span>
                </div>
             </div>
           </div>
           
         </div>
        </div>
    );
};

export default AboutMe;




  //     <div  className="hero h-[670px] md:h-[390px] lg:h-[430px] xl:h-[470px] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-around items-center px-8 md:px-16 relative mt-36 md:mt-0 overflow-hidden">

    //       {/* border  */}
    //       <div className="w-[80%] mx-auto h-[1px] gradient-background opacity-10 absolute -top-20 md:-top-28 right-0 left-0 z-40 "></div>

    //     <div className="flex-1 flex justify-center items-center h-full w-full  relative" data-aos="fade-up-right" data-aos-duration="1000">

    // {/* circles */}
    //   <div className="gradient-border rounded-full w-56 h-52 md:w-48 lg:w-[280px] md:h-48 lg:h-[280px] xl:w-[300px] xl:h-[300px] absolute left-auto top-[68px] md:left-auto lg:left-20 xl:left-40 md:top-16 lg:top-24 xl:top-24 -z-10 shadow-2xl shadow-[#8259ff]">  </div>
            
    //         <img src='https://i.ibb.co/4pmHtGT/vector-illustration-man-happily-flat-design-style-844724-4324-fotor-bg-remover-202408241495.png' className="w-[280px] lg:w-[360px] xl:w-[420px] rounded-full" />
    //     </div>
    
    //     <div className=" text-neutral-content flex-1 w-full" data-aos="fade-down-left" data-aos-duration="1000">
    //       <div className="max-w-4xl space-y-2 lg:space-y-5">
    //         <h1 className=" text-2xl lg:text-5xl rowdies-regular text-gray-300 my-5 text-left"> About Me</h1>
           
    //         <p style={{lineHeight: 1.7}} className="text-gray-400  inter-thin text-sm lg:text-base xl:text-[17px] text-justify md:text-left">I&apos;m a frontend-focused MERN developer with expertise in Next.js, React, and TypeScript for building dynamic, responsive web apps. I use Redux for state management, Tailwind CSS for clean designs, and JavaScript for interactive features. On the backend, I work with Node.js, Express, Mongoose, and MongoDB, implementing secure authentication with JWT.</p>
    //       </div>

    //       <section className="flex flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-8 mt-5 lg:mt-6 xl:mt-7">

    //             <a href='https://drive.google.com/uc?export=download&id=1VvI3kxUpt8bto3pNdxnCyRcVJ4xnRROx'>  <button className="px-4 lg:px-5 xl:px-6 py-3 md:py-3 lg:py-4 rounded-full gradient-background text-white inter-medium text-xs xl:text-sm shadow-lg shadow-[#23A3C8]/40 transition hover:brightness-110 whitespace-nowrap"> Download Resume </button></a>

    //             <div>

    //             <h1 className="inter-thin text-gray-400 mb-[6px] lg:mb-2 text-left text-sm lg:text-base xl:text-[17px] flex items-center gap-3"> <IoLocationSharp className="text-2xl text-[#7C6BD3]" />Tangail, Bangladesh </h1> 

    //             <h1 className="inter-thin text-gray-400 text-left text-sm lg:text-base xl:text-[17px] flex items-center gap-3"> <AiOutlineMail className="text-2xl text-[#7C6BD3]" /> mohadebbhowmik7@gmail.com </h1> 
    //             </div>
    //       </section>
    //     </div>
    
    
    //   </div>