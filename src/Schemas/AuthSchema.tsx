import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string({ required_error: "Password is required" }),
});

export const signUpSchema = z.object({
  name: z.string({ required_error: "Name is requiared" }),
  email: z.string().email(),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Minimum 6 character" })
    .max(20, { message: "Maximum 20 character" }),
  phone: z.string({ required_error: "Phone Number is required" }).max(11),
  address: z.string({ required_error: "Address is required" }).min(10),
});
