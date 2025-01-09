// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { useForm, useFormContext } from "react-hook-form";


// export function Input({ id, placeholder, name, type = 'text' }:any) {
//   const { register, formState: { errors } } = useFormContext(); 

//   return (
//     <>
//       <input id={name} type={type} {...register(name)} />
//       {errors[name] && (
//         <span style={{ color: 'red' }}>{errors[name].message}</span>
//       )}
//     </>
//   );
// }



export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
  const Input = (({ className, name, type='text', ...props }:any) => {
//   ({ className, name, type='text', ...props }, ref) => {
    const radius = 100; // Radius of the hover effect
    const [visible, setVisible] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleFocus = () => {
      inputRef.current?.focus();
    }
   

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    const {
      register,
      formState: { errors },
    } = useFormContext(); 


    return (
      <div className="flex flex-col gap-1">
        <motion.div
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
                var(--blue-500),
                transparent 80%
              )
            `,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="p-[2px] rounded-lg transition duration-300 group/input"
        >
          <input
            id={name}
            type={type}
            {...register(name!)} 
            className={cn(
              `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm
              file:border-0 file:bg-transparent file:text-sm file:font-medium
              placeholder:text-neutral-400 dark:placeholder-text-neutral-600
              focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
              disabled:cursor-not-allowed disabled:opacity-50
              dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
              group-hover/input:shadow-none transition duration-400`,
              className
            )}
            // ref={ref}
            // ref={handleFocus}
            {...props}
          />
        </motion.div>
        {errors[name!] && (
          <span className="text-xs text-red-500">
            {(errors[name!]?.message as string) || "This field is required."}
          </span>
        )}
      </div>
    );
  }
);

// Input.displayName = "Input";

export { Input };

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
//     const radius = 100; // change this to increase the rdaius of the hover effect
//     const [visible, setVisible] = React.useState(false);

//     let mouseX = useMotionValue(0);
//     let mouseY = useMotionValue(0);

//     function handleMouseMove({ currentTarget, clientX, clientY }: any) {
//       let { left, top } = currentTarget.getBoundingClientRect();

//       mouseX.set(clientX - left);
//       mouseY.set(clientY - top);
//     }
//     return (
//       <motion.div
//         style={{
//           background: useMotionTemplate`
//         radial-gradient(
//           ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
//           var(--blue-500),
//           transparent 80%
//         )
//       `,
//         }}
//         onMouseMove={handleMouseMove}
//         onMouseEnter={() => setVisible(true)}
//         onMouseLeave={() => setVisible(false)}
//         className="p-[2px] rounded-lg transition duration-300 group/input"
//       >
//         <input
//           type={type}
//           className={cn(
//             `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
//           file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
//           focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
//            disabled:cursor-not-allowed disabled:opacity-50
//            dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
//            group-hover/input:shadow-none transition duration-400
//            `,
//             className
//           )}
//           ref={ref}
//           {...props}
//         />
//       </motion.div>
//     );
//   }
// );
// Input.displayName = "Input";

// export { Input };
