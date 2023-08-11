import { arrayUnion, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import type { IAnswer } from "../../types/answers";

export class Answers {
    async createAnswerInDiscussion( discussionName: string, answer: string ) {
        const categoryRef = doc( db, "discussions", discussionName );
        await updateDoc( categoryRef, {
            answers: arrayUnion( answer )
        } );
    }

    async createAnswer( answer: string, discussionName: string, userToken: string ) {
        try {
            const data: IAnswer = { date: JSON.stringify( new Date ), name: answer, fromUser: userToken, discussion: discussionName };

            await setDoc( doc( db, "answers", answer ), data );

        } catch ( e ) {
            console.error( "Error adding document: ", e );
        }
    }

    async getAnswers() {
        const answers: any[] = [];

        const querySnapshot = await getDocs( collection( db, "answers" ) );

        querySnapshot.forEach( ( doc ) => {
            answers.push( doc.data() );
        } );

        return answers;
    }

    async getUserAnswers( token: string ) {
        const answers: any[] = await this.getAnswers();
        const result = answers.filter( ( item: any ) => item?.fromUser === token );

        return result;
    }
}

export const answers = new Answers();