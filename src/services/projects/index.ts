"use server";

import axiosInstance from "@/lib/AxiosInstance";


export const getProjects = async () => {
  try {
    const { data } = await axiosInstance.get("/dashboard/project");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};