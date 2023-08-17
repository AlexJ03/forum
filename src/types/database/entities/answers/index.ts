import type { IUserData } from "@types";

export interface IAnswer {
    name: string;
    fromUser: IUserData;
    date: string;
    discussion: string;
}