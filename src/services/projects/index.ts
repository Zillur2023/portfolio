"use server";
import axiosInstance from "@/lib/AxiosInstance";


export const createProject = async (projectData: FormData) => {
  try {
    // const {data} = await axiosInstance.post("/dashboard/project", projectData)
  
    const result = await fetch("http://localhost:3000/api/dashboard/project",{
      method: "POST",
      body: projectData
    })
    const data = await result.json();

    return data;
  } catch (error: any) {
    throw new Error(error?.message || error?.response?.data?.message)
  }
};

export const getProjects = async () => {
  
  try {
    const { data } = await axiosInstance.get("/dashboard/project");

    return data;
  } catch (error: any) {

    throw new Error(error?.response?.data?.message || error?.message)
  }
};

export const deleteProject = async (projectId: string) => {
  try {
    // const { data } = await axios.delete(`http://localhost:3000/api/dashboard/project?id=${projectId}`)
    const { data } = await axiosInstance.delete(`/dashboard/project?id=${projectId}`)
    

 
    return data
  } catch (error: any) {

    throw new Error(error?.message || error?.response?.data?.message)

  }
}