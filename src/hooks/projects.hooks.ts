import { createProject, deleteProject, getProjects } from "@/services/projects";
import { useMutation, useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { toast } from "sonner";

// type ProjectData = FormData;
type ProjectResponse = {
  success: boolean;
  message: string;
  data?: any; // Replace `any` with the appropriate type for your API response data
};

interface MutationContext {
  toastId: string;
}


export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FormData, any>({
    mutationKey: ["CREATE_PROJECT"],
    mutationFn: async (projectData) =>  await createProject(projectData),
    onMutate: () => {
      const toastId = toast.loading("Createing project...");
      return { toastId };
    },
    onSuccess: (data, _, context) => {
      const { toastId  } = context || {};
     
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ["GET_PROJECTS"] });
        toast.success(data.message, { id: toastId } )
      } 
    },
    onError: (error, _, context) => {
      const { toastId } = context || {};
      toast.error(error.message, { id: toastId } )

    },
   
   
  });
};

export const useGetProjects = (): UseQueryResult<any, Error> => {
  return useQuery<any,Error>({
    queryKey: ["GET_PROJECTS"],
    queryFn: async () => await getProjects(),
  });
};


export const useDeleteProject = () => {
  const queryClient = useQueryClient();


  return useMutation<any, Error, string, any>({
    mutationKey: ["DELETE_PROJECT"],
    mutationFn: async (projectId) =>  await deleteProject(projectId),
    onMutate: () => {
      const toastId = toast.loading("Deleting project...");
      return { toastId };
    },
    onSuccess: (data, _, context) => {
      const { toastId  } = context || {};
      if (data?.success) {
        queryClient.invalidateQueries({ queryKey: ["GET_PROJECTS"] });
        toast.success(data.message, { id: toastId } )
      } 
    },
    onError: (error, _, context) => {
      const { toastId } = context || {};
      toast.error(error.message, { id: toastId } )

    },
  });
}