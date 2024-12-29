import { z } from "zod";

//  const projectValidationSchema =  z.object({
//     title: z.string().min(1, "Please enter the project title!"),
//     description: z.string().min(1, "Please enter the project description!"),
//     // technologies: z.array(z.string()).min(1, "Please select at least one technology!"),
//     technologies: z.array(z.string()).min(1, "Please select at least one technology!"),
//     tecnologies: z.boolean().refine(value => value === true, {
//       message: "Please select at least one technology!",
//     }),
//     image: z.string().optional(),
//     githubLink: z.string().url("GitHub link must be a valid URL."),
//     liveLink: z.string().url("Live link must be a valid URL."),
//   });
 const projectValidationSchema =  z.object({
    _id: z.string().optional(),
    title: z.string().min(1, "Please enter the project title!"),
    description: z.string().min(1, "Please enter the project description!"),
    // technologies: z.array(z.string()).min(1, "Please select at least one technology!"),
    technologies: z.any(),
    image: z.string().optional(),
    githubLink: z.string().min(1, "Please enter the githublink!"),
    liveLink: z.string().min(1, "Please enter the liveLink!"),
  });
export default projectValidationSchema