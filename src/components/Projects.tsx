"use client";
import { FloatingDock } from "./FloatingDock";
import { useUser } from "@/lib/UserProvider";
import { PinContainer } from "./ui/PinContainer";
import { CiMenuKebab } from "react-icons/ci";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FileUpload } from "./ui/FileUpload";
import { Input } from "./form/Input";
import Modal from "./ui/Modal";
import { BottomGradient, Label, LabelInputContainer } from "./form/Label";
import { Textarea } from "./form/Textarea";
import { IProject } from "@/models/project";
import { Menu } from "./ui/Menu";
import { tecnologies } from "./Technology";
import { FaGithub  } from 'react-icons/fa';
import BorderMagicBtn from "./ui/BorderMagicBtn";
import { useCreateProject, useDeleteProject, useGetProjects } from "@/hooks/projects.hooks";
import projectValidationSchema from "@/schemas/project.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { LoadingProject } from "./ui/Loading";


const Projects = () => {
  const { mutate: createProject } = useCreateProject()
  const { mutate: deleteProject } = useDeleteProject()
  const { user } = useUser()
  const { data, isPending } = useGetProjects()
  const [projects, setProjects] = useState<IProject[]>([])
  const [active, setActive] = useState<string | null>(null);
  const [projectId, setProjectId] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedTecnologies, setSelectedTecnologies] = useState<string[]>([]);

  const methods = useForm({resolver: zodResolver(projectValidationSchema)});
  const { register, formState: { errors }, setValue, reset } = methods

  useEffect(() => {
    if (data?.data && Array.isArray(data.data)) {
      setProjects(data.data); // Update projects when data changes
    }
    }, [data?.data ])

const handleCreateProject = () => {
  setModalOpen(true)
  setProjectId(null)
  reset()
  setSelectedTecnologies([])
  }    
 
const handleEdit = (project:any) => {
  if (project) {
    setValue("_id", project._id);
    setValue("title", project.title);
    setValue("description", project.description);
    // setValue("tecnologies", project.tecnologies);
    setValue("image", project.image);
    setValue("githubLink", project.githubLink);
    setValue("liveLink", project.liveLink); 
  }
  setSelectedTecnologies([...project?.tecnologies])
};

const handleDelete = async(projectId:string) => {
   deleteProject(projectId)
  // console.log("handle Delete projectId", projectId)
}

const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setSelectedTecnologies((prevSelectedTecnologies) =>
    e.target.checked
      ? [...prevSelectedTecnologies, value] // Add if checked
      : prevSelectedTecnologies.filter((tec) => tec !== value) // Remove if unchecked
  );
};

const handleSubmit: SubmitHandler<FieldValues> = async(data) => {

  const formData = new FormData()
  formData.append("projectData", JSON.stringify({...data, _id: projectId, tecnologies: selectedTecnologies}))
  formData.append("image", files?.[0])
  console.log("formData.get",formData.get("projectData"))

   createProject(formData)
 
}; 

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  };
 
  return (
    <div className="">
      <h1 className="heading">
        Projects
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 place-items-center gap-5">
      {isPending && <LoadingProject/> }
      {   projects.map((item: IProject) => (
          <div
            className=" flex items-center justify-center w-80 md:w-[360px]"
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
         <div onClick={() => {setModalOpen(true); handleEdit(item); setProjectId(String(item?._id))}} >
           
           <BorderMagicBtn btn={"Edit"} className=" h-8 w-12"  />
         </div>
        <div onClick={() => handleDelete(String(item?._id))}   >
        <BorderMagicBtn btn={"Delete"} className=" h-8 w-12 hover:bg-red-500"  />
          </div>
        </div>
     </Menu>
     </div>
               
              <div 
              // onMouseLeave={() => setActive(null)}
              className={`relative flex items-center justify-center w-80 md:w-[360px] overflow-hidden h-[20vh] lg:h-[30vh] mb-5`}>
      
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

            <div className=" px-2">
            <h1 className="title line-clamp-1">
                {item?.title}
              </h1>

              <p
                className=" paragraph line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item?.description}
              </p>

                 
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex -space-x-3">
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

              <div className="flex items-center justify-between gap-2">
              {item?.githubLink && (
  <Link href={item.githubLink}>
    {/* <button className="text-neutral-700 px-3 py-1 rounded-md dark:text-neutral-200 bg-blue-500 hover:text-black">
      <FaGithub size={25} />
    </button> */}
    <BorderMagicBtn btn={<FaGithub size={25} />} className=" h-8 w-12"  />
    {/* <BorderMagicBtn btn={"Github"} className=" h-8 w-12"  /> */}
  </Link>
)}
{item?.liveLink && (
  <Link href={item.liveLink}>
    {/* <button className="text-neutral-700 px-3 py-1 rounded-md dark:text-neutral-200 bg-blue-500 hover:text-black">
      Live
    </button> */}
    <BorderMagicBtn btn={"Live"} className=" h-8 w-12"  />
  </Link>
)}
              </div>
              </div>
            </div>
            </PinContainer>
          </div>
        )) }
      </div>
        <div className=" text-center" onClick={handleCreateProject} >
            {/* Create Project */}
            <BorderMagicBtn btn={"Create Project"} className=" h-8 w-36"  />
          </div>
        {/* Modal outside MenuItem */}
        {isModalOpen && (
        <Modal onClose={() =>setModalOpen(false)}>

          <FormProvider {...methods} >
          <form className="my-8" onSubmit={methods.handleSubmit(handleSubmit)}>

            {/* <LabelInputContainer className="mb-2">
            <Label htmlFor="image">Image</Label>
            <Input id="image" placeholder="Enter your image" type="text" name="image" value={projectData.image} required
                onChange={handleInputChange}  />
          </LabelInputContainer> */}
           <LabelInputContainer className="mb-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter your title" type="text" name="title" 
                />
          </LabelInputContainer>
           <LabelInputContainer className="mb-2">
            <Label htmlFor="githubLink">Github link</Label>
            <Input id="githubLink" placeholder="Enter your github link" type="text" name="githubLink" 
                />
          </LabelInputContainer>
           <LabelInputContainer className="mb-2">
            <Label htmlFor="liveLink">Live link</Label>
            <Input id="liveLink" placeholder="Enter your live link" type="text" name="liveLink" 
                />
          </LabelInputContainer>
           <LabelInputContainer className="mb-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter your description" rows={3} name="description" />
          </LabelInputContainer>
           <LabelInputContainer className="mb-2">
            <Label htmlFor="tecnologies">Tecnologies</Label>
            <div className=" grid grid-cols-3">
            { tecnologies?.map((tec, index) => (
              
              <div key={index} >
                <input {...register('tecnologies')} type="checkbox" name="tecnologies" value={tec?.name} checked={selectedTecnologies?.includes(tec.name)} 
                  onChange={handleCheckboxChange}  />
              <label className=" text-sm font-normal"> {tec.name} </label>
              </div>
              )) }
            </div>
              {/* {errors?.['tecnologies']?.message && <p className="text-xs text-red-500">{errors?.['tecnologies']?.message as string}</p>} */}
              {/* {selectedTecnologies.length === 0 && <p className="text-xs text-red-500">{errors?.['tecnologies']?.message as string}</p>} */}
          </LabelInputContainer>
          <LabelInputContainer className="mb-2">
        <Label htmlFor="image">Image </Label>
        <FileUpload onChange={handleFileUpload} />
      </LabelInputContainer>
            <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        {projectId ? <>Update &rarr;</> : <>Create &rarr;</>}
        {/* Update &rarr; */}
        <BottomGradient />
      </button>
                </form>
      </FormProvider>
        </Modal>
      )}
    </div>
  );
};

export default Projects;