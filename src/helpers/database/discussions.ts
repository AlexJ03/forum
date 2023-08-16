import { arrayUnion, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@firebase-config";
import type { IDiscussion } from "@types";
import { type WithFieldValue } from "@firebase/firestore";
import { fireError } from "@helpers";
import mobx from "@mobx";

class Discussions {
    async createDiscussion( categoryName: string, question: string, userToken: string ) {
        try {
            const data: WithFieldValue<IDiscussion> = { name: question, category: categoryName, fromUser: userToken, date: JSON.stringify( new Date() ) };
            await setDoc( doc( db, "discussions", question ), data ).catch( error => fireError.setError( error.message ) );
            mobx.snackbar.open( "Вопрос успешно создан!", "success" );
        } catch ( error ) {
            fireError.setError( error.message );
        }
    }

    async createDiscussionInCategories( categoryName: string, question: string ) {
        try {
            const categoryRef = doc( db, "categories", categoryName );
            await updateDoc( categoryRef, {
                discussions: arrayUnion( question )
            } );
        } catch ( error ) {
            fireError.setError( error.message );
        }
    }

    async getDiscussions() {
        const discussions: IDiscussion[] = [];

        const querySnapshot = await getDocs( collection( db, "discussions" ) );

        querySnapshot.forEach( ( doc ) => {
            discussions.push( <IDiscussion>doc.data() );
        } );

        return discussions;
    }

    async getUserDiscussions( token: string ) {
        const discussions: IDiscussion[] = await this.getDiscussions();
        const result = discussions.filter( ( item: IDiscussion ) => item.fromUser === token );

        return result;
    }
}

export const discussions = new Discussions();