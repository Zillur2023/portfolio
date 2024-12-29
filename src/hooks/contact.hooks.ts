import { createContact, getContacts } from "@/services/contact";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


export const useCreateContact = () => {
    const queryClient = useQueryClient();

    return useMutation<any, Error, FieldValues>({
      mutationKey: ["CREATE_CONTACT"],
      mutationFn: async (messageData) => {
        toast.loading("loading...")
        return await createContact(messageData)
      },
      onSuccess: (data) => {
        // toast.dismiss()
        // toast.success( data?.message ||"Send message successful." );
          toast.dismiss();
      if (data?.success) {
        toast.success(data.message || "Contact message send successfully.");
        queryClient.invalidateQueries({ queryKey: ["GET_CONTACT"] });
      } else {
        toast.error(data.message || "Failed to create project.");
      }
      
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };
export const useGetContacts = () => {
    return useQuery<any, Error, FieldValues>({
      queryKey: ["GET_CONTACT"],
      queryFn: async () =>  await getContacts(),
    //   onSuccess: async() => await getMessages,
    //   onError: (error) => {
    //     toast.error(error.message);
    //   },
    });
  };