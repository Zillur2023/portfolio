import { z } from "zod";

 const projectValidationSchema =  z.object({
    title: z.string().min(1, "Please enter the project title!"),
    description: z.string().min(1, "Please enter the project description!"),
    tecnologies: z.array(z.string()).optional(),
    image: z.string().optional(),
    githubLink: z.string().url("GitHub link must be a valid URL."),
    liveLink: z.string().url("Live link must be a valid URL."),
  });
export default projectValidationSchema