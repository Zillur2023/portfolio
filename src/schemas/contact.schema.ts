import { z } from "zod";

 const contactValidationSchema = z.object({
    // name: z.string().min(1, "Please enter your name!"),
    name: z.string().min(1, { message: 'Please enter your name!' }),
    email: z.string().email("Please enter a valid email address!"),
    message: z.string().email("Please enter your message!!"),
    
  });
  

export default contactValidationSchema