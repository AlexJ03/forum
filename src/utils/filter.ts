// const questions = mobx.discussions.getDiscussions() && mobx.discussions.getDiscussions().filter( ( item: IDiscussion ) => item.category === name );

import type { IAnswer, IDiscussion } from "@types";

export function filterDiscussions( discussions: IDiscussion[], name: string ): IDiscussion[] {
    return discussions.filter( ( discussion: IDiscussion ) => discussion.category === name );
}

export function findCurrentDiscussion( discussions: IDiscussion[], name: string ): IDiscussion {
    return discussions.find( ( discussion: IDiscussion ) => discussion.name === name );
}

// const answersData: IAnswer[] = mobx.answers.getAnswers().filter( ( item: IAnswer ) => item?.discussion === name )

export function filterAnswers( answers: IAnswer[], name: string ): IAnswer[] {
    return answers.filter( ( answer: IAnswer ) => answer.discussion === name );
}