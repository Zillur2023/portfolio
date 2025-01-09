import axiosInstance from "@/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";


export const createContact = async (contactData:FieldValues) => {
    try {
      const {data} = await axiosInstance.post("/dashboard/contact", contactData);
  
      return data;
    } catch (error: any) {
     
      throw new Error(error?.message || error?.response?.data?.message)

    }
  };

export const getContacts = async () => {
    try {
        const { data } = await axiosInstance.get("/dashboard/contact")

        return data
    } catch (error) {
      console.error('Error :', error)

    }
}