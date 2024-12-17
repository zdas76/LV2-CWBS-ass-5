export interface IService {
    createdAt: string;
    description: string;
    duration: number;
    images: string;
    isDeleted: boolean;
    name: string;
    price: number;
    _id?:string
}

export type TBookingInfo = {
    phone: string | undefined;
    email: string | undefined;
    room: { _id: string; date: string, slots: string[] | any }[];
    totalAmount: number;
    user: string;
}

