import { arrayUnion, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@firebase-config";
import type { IDiscussion } from "../../types/entities/discussions";

class Discussions {
    async createDiscussion( categoryName: string, question: string, userToken: string ) {
        try {
            const data: IDiscussion = { name: question, category: categoryName, fromUser: userToken, date: JSON.stringify( new Date() ) };

            await setDoc( doc( db, "discussions", question ), data );

        } catch ( e ) {
            console.error( "Error adding document: ", e );
        }
    }

    async createDiscussionInCategories( categoryName: string, question: string ) {
        const categoryRef = doc( db, "categories", categoryName );
        await updateDoc( categoryRef, {
            discussions: arrayUnion( question )
        } );
    }

    async getDiscussions() {
        const discussions: any[] = [];

        const querySnapshot = await getDocs( collection( db, "discussions" ) );

        querySnapshot.forEach( ( doc ) => {
            discussions.push( doc.data() );
        } );

        return discussions;
    }

    async getUserDiscussions( token: string ) {
        const discussions: any[] = await this.getDiscussions();
        const result = discussions.filter( ( item: any ) => item?.fromUser === token );

        return result;
    }
}

export const discussions = new Discussions();