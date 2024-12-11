"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { FloatingDock } from "./FloatingDock";
import { useUser } from "@/lib/UserProvider";
import { PinContainer } from "./ui/PinContainer";
import { CiMenuKebab } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem } from "./ui/Menu";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FileUpload } from "./ui/FileUpload";
import { Input } from "./ui/Input";
import Modal from "./ui/Modal";
import { BottomGradient, Label, LabelInputContainer } from "./ui/Label";
import { toast } from "sonner";
import axios from "axios";
import { Textarea } from "./ui/Textarea";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};



const Projects = () => {
  const { user } = useUser()
  const [active, setActive] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isModalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState({ title: '', description: '', });


const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // console.log("e.prevntDefault", userData)
  // Handle form submission logic (e.g., send data to backend)
  const formData = new FormData()
  formData.append("userData", JSON.stringify(formData))
  formData.append("image", files?.[0])
  // formData.append("image", proImage)

  const toastId = toast.loading("loading...")

  try {
    const res = await axios.post("/api/dashboard/signup", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    // const res = await axios.post("/api/dashboard/signup", userData)
    console.log("signuppage result",res)
  
    if (res?.data?.success) {
      toast.success(res?.data?.message, {id: toastId})
      // router.push("/dashboard/login")
    } 
  } catch (error) {
    
  }
}; 

  // const toggleModal = () => {
  //   setModalOpen((prev) => !prev) // Toggle modal open/close
  // }

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  
    // console.log(files);
    
  };


  return (
    <div className="">
      <h1 className="heading">
        Projects
      </h1>
      <div className="flex flex-wrap items-center justify-between  ">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div 
              onMouseLeave={() => setActive(null)}
              className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
        <div 
                  
                   onMouseEnter={() => setActive(item?.id)}
                  // onClick={() => setActive(null)}
                  //  onClick={() => setActive(item?.id)}
                  className=" absolute top-3 right-3 z-20 text-2xl text-gray-300 cursor-pointer"
                  // className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
                  // className={cn("absolute top-3 right-3 z-50 text-2xl text-gray-300 cursor-pointer", className)}
                >               
 
      <MenuItem active={active} item={item?.id} title={<CiMenuKebab />}>
      {/* <MenuItem active={active} item={item?.id} title={"Edit"} className={true}>
         <Input/>
         </MenuItem>   */}
         <div className="flex flex-col space-y-4 text-sm">
          <button onClick={() => setModalOpen(true)} className="text-neutral-700 px-2 py-1 rounded-md dark:text-neutral-200 bg-blue-500 hover:text-black">
            Edit
          </button>
         <Link href={""}  className="text-neutral-700 px-2 py-1 rounded-md dark:text-neutral-200 bg-red-500 hover:text-black ">Delete</Link>
         </div>
      </MenuItem>
                </div>
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-semibold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

                 
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex -space-x-3">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                      // style={{
                      //   transform: `translateX(-${5 * index + 2}px)`,
                      // }}
                    >
                      {/* <img src={icon} alt="icon5" className="p-2" /> */}
                      <FloatingDock icon={<img src={icon} alt="icon5" className=" w-full h-full  " />} />
                   
    
                    </div>
                  ))}
                     
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
        {/* Modal outside MenuItem */}
        {isModalOpen && (
        <Modal onClose={() =>setModalOpen(false)}>
          <form className="my-8" onSubmit={handleSubmit}>

           <LabelInputContainer>
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter your title" type="text" name="title" value={formData.title} required
                onChange={handleInputChange}  />
          </LabelInputContainer>
           <LabelInputContainer className="mb-4">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter your description" rows={4} name="description" value={formData.description} required
                onChange={handleInputChange}  />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
        <Label htmlFor="image">Image </Label>
        <FileUpload onChange={handleFileUpload} />
      </LabelInputContainer>
            <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        Send &rarr;
        <BottomGradient />
      </button>
                </form>
        </Modal>
      )}
    </div>
  );
};

export default Projects;