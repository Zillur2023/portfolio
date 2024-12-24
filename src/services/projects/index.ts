"use server";

import axiosInstance from "@/lib/AxiosInstance";
import axios from "axios";
import { FieldValues } from "react-hook-form";


export const createProject = async (projectData: FormData): Promise<any> => {
  console.log("{projectData}) client", projectData)
  // console.log(projectData)
  try {
    // const res = await axios.post("http://localhost:3000/api/dashboard/project", projectData, {
    // const { data } = await axiosInstance.post("/dashboard/project", projectData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // });
    const data = await fetch("http://localhost:3000/api/dashboard/project",{
      method: "POST",
      body: projectData
    })

  // console.log("create Project data",data)

    // return data;
  } catch (error: any) {
    // throw new Error(error);
    // console.log({error})
    console.error('Error submitting project:', error.response?.data || error.message)
  }
};
export const getProjects = async () => {
  //  const url = projectId ? `/api/dashboard/project?id=${projectId}` : `/api/dashboard/project`;
  //     const res = await axios.get(url)
  try {
    const { data } = await axiosInstance.get("/dashboard/project");

    return data;
  } catch (error: any) {
    // throw new Error(error);
  }
};

export const deleteProject = async (projectId: string) => {
  // console.log({projectId})
  try {
    const { data } = await axios.delete(`http://localhost:3000/api/dashboard/project?id=${projectId}`)
    console.log("{data} delete", data)

    return data
  } catch (error: any) {
    // throw new Error(error);
  }
}