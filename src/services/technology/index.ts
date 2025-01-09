"use server";
import axiosInstance from "@/lib/AxiosInstance";


export const createTechnology = async (technology: any) => {
  try {
    const { data } = await axiosInstance.post("/dashboard/technology", technology)
  
    // const result = await fetch("http://localhost:3000/api/dashboard/tecnology",{
    //   method: "POST",
    //   body: tecnologyData
    // })
    // const data = await result.json();

    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message)
  }
};

export const getTechnology = async () => {
  
  try {
    const { data } = await axiosInstance.get("/dashboard/technology");

    return data;
  } catch (error: any) {

    throw new Error(error?.response?.data?.message || error?.message)
  }
};