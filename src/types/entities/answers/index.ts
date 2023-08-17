import type { IAnswer } from "@types";

export interface IAnswers {
    answers: IAnswer[];
}

export type withRelocate = boolean;

export interface IWithRelocate {
    relocate: boolean;
}