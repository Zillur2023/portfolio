"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs  } from 'react-icons/fa';
import { SiVuedotjs, SiMongodb, SiCloudinary, SiFirebase, SiExpress, SiTsnode } from 'react-icons/si';
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./ui/Modal";
import { BottomGradient, Label, LabelInputContainer } from "./form/Label";
import { zodResolver } from "@hookform/resolvers/zod";
import BorderMagicBtn from "./ui/BorderMagicBtn";
import { useCreateTechnology, useGetTechnology } from "@/hooks/technology.hooks";
import { ITechnology } from "@/models/technology";
import technologyValidationSchema from "@/schemas/technology.schema";
import { TbBrandJavascript, TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { LoadingTechnology } from "./ui/Loading";
import { IExtendedIUser } from "@/lib/UserProvider";



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
  // const second = {
  //   initial: {
  //     x: -20,
  //     rotate: 5,
  //   },
  //   hover: {
  //     x: 0,
  //     rotate: 0,
  //   },
  // };
  // const images = ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"]
  // const items = [
  //    {
  //     variants: first,
  //     src:"/next.svg",
  //     text: "Next js"
  //    },
  //    {
  //     variants: second,
  //     src:"/tail.svg",
  //     text: "Tainwind css"
  //    },     
  // ]

  export const technologies = [
    // Frontend Frameworks
    { name: "Next.js", variants: first, icon: <TbBrandNextjs className="w-full h-full" /> },
    { name: "React.js", variants: first, icon: <FaReact className="w-full h-full" /> },
    { name: "Vue.js", variants: first, icon: <SiVuedotjs className="w-full h-full" /> },
  
    // Programming Languages
    { name: "JavaScript", variants: first, icon: <TbBrandJavascript className="w-full h-full" /> },
    { name: "TypeScript", variants: first, icon: <TbBrandTypescript className="w-full h-full" /> },
  
    // Backend Frameworks
    { name: "Node.js", variants: first, icon: <FaNodeJs className="w-full h-full" /> },
    { name: "Express.js", variants: first, icon: <SiExpress className="w-full h-full" /> },
    { name: "Node.ts", variants: first, icon: <SiTsnode className="w-full h-full" /> },
  
    // Databases & Cloud
    { name: "MongoDB", variants: first, icon: <SiMongodb className="w-full h-full" /> },
    { name: "Firebase", variants: first, icon: <SiFirebase className="w-full h-full" /> },
    { name: "Cloudinary", variants: first, icon: <SiCloudinary className="w-full h-full" /> },
  ];
  export const Technology = ({user}:{user?: IExtendedIUser | null}) => {
    const { data, isPending } = useGetTechnology()
    const { mutate: createTechnology } = useCreateTechnology()
      const [technology, setTechnology] = useState<ITechnology[] >([]);
      const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
      const [isModalOpen, setModalOpen] = useState(false)

      useEffect(() => {
        if (data?.data && Array.isArray(data.data)) {
          setTechnology(data.data); 
        }
        }, [data?.data, ])
        
      

      const methods = useForm({resolver: zodResolver(technologyValidationSchema)});
  const { register, formState: { errors }, reset } = methods

      const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSelectedTechnologies((prevSelectedTecnologies) =>
          e.target.checked
            ? [...prevSelectedTecnologies, value] // Add if checked
            : prevSelectedTecnologies.filter((tec) => tec !== value) // Remove if unchecked
        );
      };

      const handleCreateTehcnology = () => {
        setModalOpen(true) 
        reset()
        setSelectedTechnologies([])
        }

      const handleTecnologyUpdate = () => {
     
        const updateTechnologies = technology?.[0]?.technologies?.map((tech) => `${tech}`)
        // const updateTechnologies = tecnology?.[0]?.tecnologies?.join(",")
        if(updateTechnologies) {
          setModalOpen(true)
          setSelectedTechnologies(updateTechnologies)
        }

      };
    
    
      const handleSubmit: SubmitHandler<FieldValues> = (data) => {
      // createTecnology(data)
      createTechnology({...data, _id: technology?.[0]?._id, technologies: selectedTechnologies})
    };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className=" "
    >
      <h1 className="heading ">Technologies</h1>
      { (user && !technology?.[0]?._id) && <div className=" text-center mb-3" onClick={handleCreateTehcnology} >
            
            <BorderMagicBtn btn="Create &rarr;" className=" h-8 w-36"  />
          </div> }
      { (user && technology?.[0]?._id) && <div className=" text-center mb-3" onClick={handleTecnologyUpdate} >
            
            <BorderMagicBtn btn="Update &rarr;" className=" h-8 w-36"  />
          </div> }
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 place-items-center  ">
      { isPending && <LoadingTechnology/> }
         
          {
       technology?.[0]?.technologies?.map((tech, index) => { 
         const selectItem = technologies.find(tec => tec.name === tech)

         return (
          selectItem && (
            <div key={index} className="  h-32 w-32 flex justify-center items-center my-5 ">
            <motion.div
            // key={selectItem?.name}
          variants={selectItem?.variants}
          className="h-full w-full rounded-2xl bg-white dark:bg-black  flex flex-col items-center justify-center"
        >
          {/* <Image
            src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10"
          /> */}
          <div className=" h-20 w-20">
  
          {/* <img src={item?.src} alt="icon5" className="rounded-full h-full w-full " /> */}
          {selectItem?.icon}
          </div>
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
            {selectItem?.name}
          </p>
          {/* <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
            {item?.text}
          </p> */}
        </motion.div>
          </div> 
          )
         )
  })
      }
            
</div>
{isModalOpen && (
        <Modal onClose={() =>setModalOpen(false)}>

          <FormProvider {...methods} >
          <form className="my-8" onSubmit={methods.handleSubmit(handleSubmit)}>
         
           <LabelInputContainer className="mb-2">
            <Label htmlFor="tecnologies">Tecnologies</Label>
            <div className=" grid grid-cols-3">
            { technologies?.map((tec, index) => (
              
              <div key={index} >
                <input {...register('tecnologies')} type="checkbox" name="tecnologies" value={tec?.name} checked={selectedTechnologies?.includes(tec.name)} 
                  onChange={handleCheckboxChange}  />
              <label className=" text-sm font-normal"> {tec.name} </label>
              </div>
              )) }
            </div>
              {/* {errors?.['tecnologies']?.message && <p className="text-xs text-red-500">{errors?.['tecnologies']?.message as string}</p>} */}
              {/* {selectedTecnologies.length === 0 && <p className="text-xs text-red-500">{errors?.['tecnologies']?.message as string}</p>} */}
          </LabelInputContainer>
            <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        {technology?.[0]?._id ? <>Update &rarr;</> : <>Create &rarr;</>}
        <BottomGradient />
      </button>
                </form>
      </FormProvider>
        </Modal>
      )}
    
    </motion.div>
  );
};



