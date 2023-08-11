import type { IQuestion } from "./questions";
import type { IAnswer } from "./answers";

export interface IUserAuthData {
    email: string;
    password: string;
}

interface IUserDB {
    name: string | undefined;
    token: string;
}

export interface IUser {
    user: IUserDB;
    discussions: IQuestion[] | undefined;
    answers: IAnswer[] | undefined;
}