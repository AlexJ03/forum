import type { IAnswer, IDiscussion } from "@types";

export function filterDiscussions( discussions: IDiscussion[], name: string ): IDiscussion[] {
    return discussions.filter( ( discussion: IDiscussion ) => discussion.category === name );
}

export function findCurrentDiscussion( discussions: IDiscussion[], name: string ): IDiscussion {
    return discussions.find( ( discussion: IDiscussion ) => discussion.name === name );
}


export function filterAnswers( answers: IAnswer[], name: string ): IAnswer[] {
    return answers.filter( ( answer: IAnswer ) => answer.discussion === name );
}