"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FloatingDock } from "./FloatingDock";
import { useUser } from "@/lib/UserProvider";
import { PinContainer } from "./ui/PinContainer";
import { CiMenuKebab } from "react-icons/ci";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FileUpload } from "./ui/FileUpload";
import { Input } from "./ui/Input";
import Modal from "./ui/Modal";
import { BottomGradient, Label, LabelInputContainer } from "./ui/Label";
import { toast } from "sonner";
import axios from "axios";
import { Textarea } from "./ui/Textarea";
import { FaReact, FaNodeJs, FaGithub  } from 'react-icons/fa';
import { SiNextdotjs, SiVuedotjs, SiMongodb, SiCloudinary, SiFirebase, SiExpress } from 'react-icons/si';
import { IProject } from "@/models/project";
import { Menu } from "./ui/Menu";

export const tecnologies = [
  { name: "Next.js", icon: <SiNextdotjs className=" w-full h-full  " /> },
  { name: "React.js", icon: <FaReact className=" w-full h-full  "/> },
  { name: "Vue.js", icon: <SiVuedotjs className=" w-full h-full  "/> },
  { name: "JavaScript", icon: <FaReact className=" w-full h-full  "/> }, 
  { name: "Mongodb", icon: <SiMongodb className=" w-full h-full  "/> },
  { name: "Cloudinary", icon: <SiCloudinary className=" w-full h-full  "/> },
  { name: "Firebase", icon: <SiFirebase className=" w-full h-full  "/> },
  { name: "Node.js", icon: <FaNodeJs className=" w-full h-full  "/> },
  { name: "Express.js", icon: <SiExpress className=" w-full h-full  "/> }
];


const Project = () => {
  const { user } = useUser()
  const [projects, setProjects] = useState<IProject[]>([])
  const [active, setActive] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedTecnologies, setSelectedTecnologies] = useState<string[]>([]);
  console.log({active})

  // console.log({selectedTecnologies})
  const [projectData, setProjectData] = useState<IProject>({ title: '', description: '', tecnologies: selectedTecnologies, githubLink: '', liveLink: ''});
  // console.log({projects})
  // console.log("project.length", projects?.[0]?.image)
  // console.log({projectData})
 
const getProjects = async(projectId = null) => {
  try {
    const url = projectId ? `/api/dashboard/project?id=${projectId}` : `/api/dashboard/project`;
    const res = await axios.get(url)
    // console.log({res})
    // setProjects(projectId ? [data.projectData] : data.projectData);
    setProjects(projectId ? [res?.data?.data] : res?.data?.data);
  } catch (error) {
    
  }
}

const handleEdit = (project:any) => {
  console.log("handleEdit --project", project)
  // setProjectData({_id: project?._id, title: project?.title, description: project?.description , tecnologies: project?.tecnologies, image:project?.image});
  setProjectData({...project})
  setSelectedTecnologies([...project?.tecnologies])
  // setFiles([...project?.image])
};



const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setProjectData({ ...projectData, [name]: value });
};
const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setSelectedTecnologies((prevSelectedTecnologies) =>
    e.target.checked
      ? [...prevSelectedTecnologies, value] // Add if checked
      : prevSelectedTecnologies.filter((tec) => tec !== value) // Remove if unchecked
  );
};

const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // console.log("e.prevntDefault", userData)
  // Handle form submission logic (e.g., send data to backend)
  const formData = new FormData()
  formData.append("projectData", JSON.stringify(projectData))
  formData.append("image", files?.[0])
  // formData.append("image", proImage)

  const toastId = toast.loading("loading...")

  try {
    const res = await axios.post("/api/dashboard/project", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    // const res = await axios.post("/api/dashboard/signup", userData)
    // console.log("signuppage result",res)
  
    if (res?.data?.success) {
      toast.success(res?.data?.message, {id: toastId})
      getProjects(); // Re-fetch projects

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

  useEffect(() => {
    getProjects()
    setProjectData((prevData) => ({
      ...prevData,
      tecnologies: selectedTecnologies, // Update tecnologies when selectedTecnologies changes
    }));
  }, [selectedTecnologies])
 


  return (
    <div className="">
      <h1 className="heading">
        Projects
      </h1>
      <div className="flex flex-wrap items-center justify-between  ">
     {  projects?.length ? (
        projects?.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-96"
            key={item?._id}
          >
            <PinContainer
              title={item?.liveLink}
              href={item?.liveLink}
            >
                        
     <div 
     onMouseLeave={() => setActive(null)}
      className=" ">
     <Menu active={active} setActive={setActive} item={String(item?._id)} title={<CiMenuKebab />}>
        <div className="flex flex-col space-y-1 text-sm">
         <button onClick={() => {setModalOpen(true); handleEdit(item); setId(String(item?._id))}} className="text-neutral-700 px-2 py-1 rounded-md dark:text-neutral-200 bg-blue-500 hover:bg-blue-600 hover:text-black">
           Edit
         </button>
        <Link href={""}  className="text-neutral-700 px-2 py-1 rounded-md dark:text-neutral-200 bg-red-500 hover:bg-red-600 hover:text-black ">Delete</Link>
        </div>
     </Menu>
     </div>
               
              <div 
              // onMouseLeave={() => setActive(null)}
              className="relative flex items-center justify-center sm:w-96 w-96 overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
      
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item?.image}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-semibold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item?.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item?.description}
              </p>

                 
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex -space-x-3">
                  {/* {item.iconLists.map((icon, index) => ( */}
                  {/* {item?.tecnologies?.map((icon, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                      // style={{
                      //   transform: `translateX(-${5 * index + 2}px)`,
                      // }}
                    >
                      {/* <img src={icon} alt="icon5" className="p-2" /> */}
                      {/* <FloatingDock icon={<img src={icon} alt="icon5" className=" w-full h-full  " />} /> */}
                   
    
                    {/* </div> */}
                  {/* ))} */} 
                    {item?.tecnologies?.map((tecName, index) => {
    // Find the matching technology from the `tecnologies` array
    const tech = tecnologies.find(tec => tec.name === tecName);
    // console.log({tech})
    // console.log("tech.icon",tech?.icon)

    return (
      tech && (
        <div key={index} className="flex justify-center items-center">
          <FloatingDock icon={tech?.icon} title={tech.name} />
        </div>
      )
    );
  })}
                     
                </div>

                {/* <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div> */}
              <div className="flex items-center justify-between gap-2">
              {item?.githubLink && (
  <Link href={item.githubLink}>
    <button className="text-neutral-700 px-3 py-1 rounded-md dark:text-neutral-200 bg-blue-500 hover:text-black">
      <FaGithub size={25} />
    </button>
  </Link>
)}
{item?.liveLink && (
  <Link href={item.liveLink}>
    <button className="text-neutral-700 px-3 py-1 rounded-md dark:text-neutral-200 bg-blue-500 hover:text-black">
      Live
    </button>
  </Link>
)}
              </div>
              </div>
            </PinContainer>
          </div>
        ))) : ("") }
      </div>
        <button onClick={() => {setModalOpen(true); setId(null); setSelectedTecnologies([]); setProjectData({ title: '', description: '', tecnologies: selectedTecnologies, githubLink: '', liveLink: ''})}} className="text-neutral-700 px-2 py-1 rounded-md dark:text-neutral-200 bg-blue-500 hover:text-black">
            Create Project
          </button>
        {/* Modal outside MenuItem */}
        {isModalOpen && (
        <Modal onClose={() =>setModalOpen(false)}>
          <form className="my-8" onSubmit={handleSubmit}>

           <LabelInputContainer className="mb-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter your title" type="text" name="title" value={projectData.title} required
                onChange={handleInputChange}  />
          </LabelInputContainer>
           <LabelInputContainer className="mb-2">
            <Label htmlFor="githubLink">Github link</Label>
            <Input id="githubLink" placeholder="Enter your github link" type="text" name="githubLink" value={projectData.githubLink} required
                onChange={handleInputChange}  />
          </LabelInputContainer>
           <LabelInputContainer className="mb-2">
            <Label htmlFor="liveLink">Live link</Label>
            <Input id="liveLink" placeholder="Enter your live link" type="text" name="liveLink" value={projectData.liveLink} required
                onChange={handleInputChange}  />
          </LabelInputContainer>
           <LabelInputContainer className="mb-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter your description" rows={3} name="description" value={projectData.description} required
                onChange={handleInputChange}  />
          </LabelInputContainer>
           <LabelInputContainer className="mb-2">
            <Label htmlFor="tecnologies">Tecnologies</Label>
            <div className=" grid grid-cols-3">
            { tecnologies?.map((tec) => (
              
              <div key={tec.name} >
                <input type="checkbox" name="tecnologies" value={tec.name} checked={selectedTecnologies.includes(tec.name)} 
                  onChange={handleCheckboxChange}  />
              <label className=" text-sm font-normal"> {tec.name} </label>
              </div>
              )) }
            </div>
          </LabelInputContainer>
          <LabelInputContainer className="mb-2">
        <Label htmlFor="image">Image </Label>
        <FileUpload onChange={handleFileUpload} />
      </LabelInputContainer>
            <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        {id ? <>Update &rarr;</> : <>Create &rarr;</>}
        {/* Update &rarr; */}
        <BottomGradient />
      </button>
                </form>
        </Modal>
      )}
    </div>
  );
};

export default Project;