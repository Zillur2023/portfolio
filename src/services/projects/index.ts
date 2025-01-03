"use server";
import axiosInstance from "@/lib/AxiosInstance";
import axios from "axios";



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

    return error
  }
};

export const getProjects = async () => {
  //  const url = projectId ? `/api/dashboard/project?id=${projectId}` : `/api/dashboard/project`;
  //     const res = await axios.get(url)
  try {
    // const { data } = await axiosInstance.get("/dashboard/project");
    const { data } = await axios.get("http://localhost:3000/api/dashboard/project");

   console.log("getProjects index data", data)

    return data;
  } catch (error: any) {

    return error
  }
};

export const deleteProject = async (projectId: string) => {
  // console.log({projectId})
  try {
    const { data } = await axios.delete(`http://localhost:3000/aapi/dashboard/project?id=${projectId}`)
    // console.log("{data} delete", data)

 
    return data
  } catch (error: any) {

    return error
  }
}