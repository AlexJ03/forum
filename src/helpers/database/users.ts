import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { discussions as discussions_db } from "./discussions";
import { answers as answers_db } from "./answers";

class Users {
    async addUser( token: string ) {
        try {
            const data: unknown = { token };

            await setDoc( doc( db, "users", token ), data );

        } catch ( e ) {
            console.error( "Error adding document: ", e );
        }
    }

    async getUserData( token: string ) {
        const docRef = doc( db, "users", token );
        const docSnap = await getDoc( docRef );

        if ( docSnap.exists() ) {
            return docSnap.data();
        } else {
            console.log( "Document is not defined..." );
        }
    }

    async createUserName( token: string, name: string ) {
        try {
            const data: unknown = { token, name };

            await setDoc( doc( db, "users", token ), data );
        } catch ( e ) {
            console.error( "Error adding document: ", e );
        }
    }

    async getFullUserData( token: string ) {
        const user = await this.getUserData( token );
        const discussions = await discussions_db.getUserDiscussions( token );
        const answers = await answers_db.getUserAnswers( token );

        return { user, discussions, answers };
    }
}

export const users = new Users();