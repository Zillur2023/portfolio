import { createTechnology, getTechnology } from "@/services/technology";
import { useMutation, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { toast } from "sonner";


export const useCreateTechnology = () => {
    const queryClient = useQueryClient();
  
    return useMutation<any, Error, any, any>({
      mutationKey: ["CREATE_TECNOLOGY"],
      mutationFn: async (technology) =>  await createTechnology(technology),
      onMutate: () => {
        const toastId = toast.loading("Createing tecnology...");
        return { toastId };
      },
      onSuccess: (data, _, context) => {
        const { toastId  } = context || {};
       
        if (data?.success) {
          queryClient.invalidateQueries({ queryKey: ["GET_TECNOLOGY"] });
          toast.success(data.message, { id: toastId } )
        } 
      },
      onError: (error, _, context) => {
        const { toastId } = context || {};
        toast.error(error.message, { id: toastId } )
  
      },
     
     
    });
  };
  
  export const useGetTechnology = (): UseQueryResult<any, Error> => {
    return useQuery<any,Error>({
      queryKey: ["GET_TECNOLOGY"],
      queryFn: async () => await getTechnology(),
    });
  };
  