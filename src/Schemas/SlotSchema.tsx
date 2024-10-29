import { z } from "zod";

export const addSlotsSchema = z.object({
    service: z.string({ required_error: "Service is required" }),
    date: z.string({ required_error: "Date is required" }),
    startTime: z.number({ required_error: "Start time is required" }).min(1),
    endTime: z.number({ required_error: "End time as Minute is required" })
  });