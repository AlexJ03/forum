import type { IUserData } from "@types";

export interface IDiscussion {
    category: string;
    // fromUser: string;
    fromUser: IUserData
    name: string;
    date: string;
    answers?: string[];
}