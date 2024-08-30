import { z } from "zod";

export const addServiceSchema = z.object({
  name: z.string({ required_error: "Service name is required" }),
  description: z.string({ required_error: "Description is required" }),
  price: z.number({ required_error: "Price is required" }).min(1),
  duration: z.number({ required_error: "Duration time as Minute is required" }),
  images: z.string({ required_error: "Minimum select one image" }),
});
