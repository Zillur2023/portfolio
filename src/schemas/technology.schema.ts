import { z } from "zod";


 const technologyValidationSchema =  z.object({
    _id: z.string().optional(),
    // technologies: z.array(z.string()).min(1, "Please select at least one technology!"),
    technologies: z.any(),
  });
export default technologyValidationSchema