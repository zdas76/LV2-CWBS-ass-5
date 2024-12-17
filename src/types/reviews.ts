import { TUser } from "./authtypes";

export type TReviews = {
    createdAt: string;
    
    feedback: string;
    rating: number;
    updatedAt:string;
    user: TUser
    _id: string
};
