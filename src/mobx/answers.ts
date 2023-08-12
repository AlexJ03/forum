import { makeAutoObservable, toJS } from "mobx";
import type { IAnswer } from "../types/entities/answers";

class Answers {
    answers: IAnswer[];

    constructor() {
        makeAutoObservable( this );
    }

    setAnswers( answers: IAnswer[] ) {
        this.answers = answers;
    }

    getAnswers() {
        return toJS( this.answers );
    }
}

export const answers = new Answers();