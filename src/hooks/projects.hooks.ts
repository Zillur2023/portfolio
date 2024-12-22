import { getProjects } from "@/services/projects";
import { useQuery } from "@tanstack/react-query";


export const useGetProjects = () => {
  return useQuery({
    queryKey: ["GET_PROJECTS"],
    queryFn: async () => await getProjects(),
  });
};