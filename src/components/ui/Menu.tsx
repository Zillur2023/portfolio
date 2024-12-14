"use client";
import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const Menu = ({
  setActive,
  active,
  item,
  title,
  className = false,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  title?:string | React.ReactNode;
  className?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <div
     onMouseEnter={() => setActive(item)} 
    className=" absolute top-3 right-0 z-20 text-2xl text-gray-300 cursor-pointer"
    >
     <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white flex items-center justify-end"
        // onClick={(e) => e.stopPropagation()}
      >
        {/* {item} */}
        {title}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div 
            // className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-1"
            // className="absolute top-[calc(100%_+_1.2rem)] left-[-10px] transform -translate-x-1/2 pt-1"
            className={className ? "" : " "}
            >
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-md overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-1"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};






