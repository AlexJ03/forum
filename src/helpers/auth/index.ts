import { makeAutoObservable } from "mobx";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@firebase-config";
import type { NavigateFunction } from "react-router-dom";
import { token, database, fireError } from "@helpers";
import type { IUserAuthData } from "@types";

class UserAuth {
    constructor() {
        makeAutoObservable( this );
    }

    async signOut() {
        signOut( auth ).then( () => {
            token.removeToken();
        } ).catch( ( error ) => fireError.setError( error.message ) );
    }

    checkUser( navigate: NavigateFunction ) {
        onAuthStateChanged( auth, ( user ) => {
            if ( user ) {
                navigate( "/homepage" );
            } else {
                navigate( "/" );
            }
        } );
    }

    async createUser( userData: IUserAuthData ) {
        const { email, password } = userData;

        createUserWithEmailAndPassword( auth, email, password )
            .then( userCredential => {
                const { uid } = userCredential.user;

                token.setToken( uid );
                database.users.addUser( uid );
            } )
            .catch( error => fireError.setError( error.message ) );
    }

    async loginUser( userData: IUserAuthData ) {
        const { email, password } = userData;

        signInWithEmailAndPassword( auth, email, password )
            .then( userCredential => {
                const { uid } = userCredential.user;
                token.setToken( uid );
            } )
            .catch( error => fireError.setError( error.message ) );
    }
}

export const userAuth = new UserAuth();