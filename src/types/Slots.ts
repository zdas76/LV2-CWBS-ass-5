

export type TSlot = {
  _id?: string;
  service: string;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked" | "canceled";
};
