import { createMessage } from "@/services/message";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


export const useUserMessage = () => {
    return useMutation<any, Error, FieldValues>({
      mutationKey: ["CREATE_MESSAGE"],
      mutationFn: async (messageData) => {
        toast.loading("loading...")
        await createMessage(messageData),
      },
      onSuccess: (data) => {
        toast.dismiss()
        toast.success( data?.message ||"Send message successful." );
      
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };