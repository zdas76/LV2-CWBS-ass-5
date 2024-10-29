

export type TSlot = {
  service: string;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked" | "canceled";
};
