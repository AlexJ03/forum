import type { IAnswer, IDiscussion, IUserData } from "@types";

export interface IUserFullData {
    user: IUserData;
    discussions: IDiscussion[];
    answers: IAnswer[];
}