export interface IAnswer {
    name: string;
    fromUser: string;
    date: string;
    discussion: string;
}

export interface IAnswers {
    answers: IAnswer[];
}