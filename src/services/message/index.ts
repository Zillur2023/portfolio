import axiosInstance from "@/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";


export const createMessage = async (messageData: FieldValues) => {
    try {
      const { data } = await axiosInstance.post("/dashboard/message", messageData);
    
  
      return data;
    } catch (error: any) {
      // throw new Error(error);
      // console.log({error})
      console.error('Error submitting message:', error.response?.data || error.message)
    }
  };