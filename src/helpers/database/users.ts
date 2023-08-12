import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@firebase-config";
import { discussions as discussions_db } from "./discussions";
import { answers as answers_db } from "./answers";
import type { IUserData } from "../../types/database/user";
import { type WithFieldValue } from "@firebase/firestore";

class Users {
    async addUser( token: string ) {
        try {
            const data: WithFieldValue<IUserData> = { token };

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
            const data: WithFieldValue<IUserData> = { token, name };

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