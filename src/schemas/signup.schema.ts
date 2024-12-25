import { z } from "zod";

 const signupValidationSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  passwordChangedAt: z.date().optional(),
  image: z.string(),
  role: z.enum(["admin"]).optional(),
  status: z.enum(["in-progress", "blocked"]).optional(),
  isDeleted: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default signupValidationSchema