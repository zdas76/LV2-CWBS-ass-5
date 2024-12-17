import { z } from "zod";

export const vehicleType = [
    "car",
    "SUV",
    "van",
    "motorcycle",
    "bus",
    "electricVehicle",
    "hybridVehicle",
    "bicycle",
    "tractor",
  ];

export const createBookignValidation = z.object({
    body: z.object({
      // serviceId: z.string(),
      slotId: z.string(),
      vehicleType: z.string(z.enum([...vehicleType] as [string, ...string[]])),
      vehicleBrand: z.string(),
      vehicleModel: z.string(),
      manufacturingYear: z.string(),
      registrationPlate: z.string(),
    }),
  });