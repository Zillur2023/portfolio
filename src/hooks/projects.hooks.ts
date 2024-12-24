import { createProject, deleteProject, getProjects } from "@/services/projects";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type ProjectData = FormData;
type ProjectResponse = {
  success: boolean;
  message: string;
  data?: any; // Replace `any` with the appropriate type for your API response data
};


export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_PROJECT"],
    mutationFn: async (projectData) => {
      toast.loading("loading...")
      await createProject(projectData)
    },
    onSuccess: (data) => {
      toast.dismiss();
      // if (data?.success) {
        toast.success( data?.message || "Project created successfully.");
        queryClient.invalidateQueries({
          queryKey: ["GET_PROJECTS"],
        });
      // } else {
      //   toast.error("Failed to create project.");
      // }
    },
    onError: (error: any) => {
      toast.error(error?.message || "An error occurred while creating the project.");
    },
   
  });
};

export const useGetProjects = () => {
  return useQuery<any, Error>({
    queryKey: ["GET_PROJECTS"],
    queryFn: async () => await getProjects(),
    // onError: (error) => {
    //   toast.error(error?.message || "Failed to fetch projects.");
    // },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();


  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_PROJECT"],
    mutationFn: async (projectId) => {
      toast.loading("loading...")
      await deleteProject(projectId)
    },
    onSuccess: (data) => {
      toast.dismiss()
        toast.success(  data?.message || "Delete successfully");
        queryClient.invalidateQueries({
          queryKey: ["GET_PROJECTS"],
        });
      
    },
    onError: (error: any) => {
      toast.error(error?.message || "An error occurred while deleting the project.");
    },
  });
}