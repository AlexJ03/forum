import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "@firebase-config";
import { discussions as discussions_db } from "./discussions";
import { answers as answers_db } from "./answers";
import type { IUserData } from "@types";
import { type WithFieldValue } from "@firebase/firestore";
import { fireError } from "@helpers";
import mobx from "@mobx";

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
            console.error( "Document is not defined..." );
        }
    }

    async getUsers() {
        const users: WithFieldValue<IUserData[]> = [];

        const usersRef = collection( db, "users" );
        const querySnapshot = await getDocs( usersRef );

        querySnapshot.forEach( ( doc ) => {
            users.push( <IUserData>doc.data() );
        } );

        return users;
    }

    async createUserName( token: string, name: string ) {
        try {
            const data: WithFieldValue<IUserData> = { token, name };

            await setDoc( doc( db, "users", token ), data );
            mobx.snackbar.open( "Данные изменены", "info" );
        } catch ( error ) {
            fireError.setError( error.message );
        }
    }

    async getFullUserData( token: string ) {
        const user = await this.getUserData( token );
        const discussions = await discussions_db.getUserDiscussions( token );
        const answers = await answers_db.getUserAnswers( token );

        return { user, discussions, answers };
    }

    async getUserName( token: string ) {
        const data = await this.getUserData( token );
        return data?.name;
    }
}

export const users = new Users();