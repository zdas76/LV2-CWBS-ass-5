import { IService } from "./service.types";

export type TSlot = {
  _id?: string;
  service: IService;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked" | "canceled";
  createdAt?: Date;
  updatedAt?: Date;
};
