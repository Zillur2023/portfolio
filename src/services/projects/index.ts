"use server";
import axiosInstance from "@/lib/AxiosInstance";


export const createProject = async (projectData: FormData) => {
  try {
    // const result = await axios.post("http://localhost:3000/api/dashboard/project", projectData)
  
    const result = await fetch("http://localhost:3000/api/dashboard/project",{
      method: "POST",
      body: projectData
    })
    const data = await result.json();

    return data;
  } catch (error: any) {

    throw new Error(error?.message)
  }
};

export const getProjects = async () => {
  
  try {
    const { data } = await axiosInstance.get("/dashboard/project");

  //  console.log("getProjects index data", data)

    return data;
  } catch (error: any) {
    console.log("getProject error", error)

    throw new Error(error?.message)
  }
};

export const deleteProject = async (projectId: string) => {
  // console.log({projectId})
  try {
    // const { data } = await axios.delete(`http://localhost:3000/api/dashboard/project?id=${projectId}`)
    const { data } = await axiosInstance.delete(`/dashboard/project?id=${projectId}`)
    
    // console.log("{data} delete", data)

 
    return data
  } catch (error: any) {

    throw new Error(error?.message)
  }
}