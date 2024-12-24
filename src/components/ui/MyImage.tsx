import React from 'react'
import { easeInOut, motion } from "framer-motion";
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';



const MyImage = () => {
  return (
    <div className=' w-full h-full relative'>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" }
        }}
        >
          <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeInOut }
          }}
          // className=' w-[398px] h-[498px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute '
          className=' w-[288px] h-[398px] md:w-[358px] md:h-[498px] mix-blend-lighten absolute '
          >
            <Image
            src={"https://i.ibb.co.com/7y1xDHh/366963141-823967749443440-4768028801184201462-n-removebg-preview.png"}
            // src={"/download (1).jpeg"}
            priority
            quality={100}
            fill
            alt='profileImage'
            className=' object-contain'
            />
            {/* <FaGithub size={25} /> */}

          </motion.div>
          <motion.svg
          // className=" w-[388px] h-[506px] xl:w-[506px] xl:h-[586px] "
          className=" w-[315px] h-[400px] md:w-[388px] md:h-[506px] "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate= {{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate:[120, 360],
              stroke: ["#00ff99", "#ff0099", "#0099ff"], // Color transition
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            >
              
            </motion.circle>
            
          </motion.svg>

        </motion.div>
    </div>
  )
}

export default MyImage