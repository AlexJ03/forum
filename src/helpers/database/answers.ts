import { arrayUnion, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@firebase-config";
import type { IAnswer } from "@types";
import { type WithFieldValue } from "@firebase/firestore";
import { fireError } from "@helpers";

class Answers {
    async createAnswerInDiscussion( discussionName: string, answer: string ) {
        try {
            const categoryRef = doc( db, "discussions", discussionName );
            await updateDoc( categoryRef, {
                answers: arrayUnion( answer )
            } );
        } catch ( error ) {
            fireError.setError( error.message );
        }
    }

    async createAnswer( answer: string, discussionName: string, userToken: string ) {
        try {
            const data: WithFieldValue<IAnswer> = {
                date: JSON.stringify( new Date ),
                name: answer,
                fromUser: userToken,
                discussion: discussionName
            };

            const ref = doc( db, "answers", answer );
            await setDoc( ref, data );

        } catch ( error ) {
            fireError.setError( error.message );
        }
    }

    async getAnswers() {
        const answers: IAnswer[] = [];

        const querySnapshot = await getDocs( collection( db, "answers" ) );

        querySnapshot.forEach( ( doc ) => {
            answers.push( <IAnswer>doc.data() );
        } );

        return answers;
    }

    async getUserAnswers( token: string ) {
        const answers: IAnswer[] = await this.getAnswers();
        const result = answers.filter( ( item: IAnswer ) => item.fromUser === token );

        return result;
    }
}

export const answers = new Answers();