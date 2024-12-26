import { z } from "zod";

 const signupValidationSchema = z.object({
    // name: z.string().min(1, "Please enter your name!"),
    name: z.string().min(1, {message:"Please enter your name!"}),
    email: z.string().email("Please enter a valid email address!"),
    password: z.string().min(1, "Password is required!"),
    passwordChangedAt: z.date().optional(),
    // image: z.string().min(1, "Please provide an image URL!"),
  });
  

export default signupValidationSchema
// const schema = z.object({
//     name: z.string().min(1, { message: 'Required' }),
//     age: z.number().min(10),
//   });