import { firebaseErrors } from "@utils";

class FirebaseError {
    message: string;

    setError( message: string ) {
        const checkError = Object.keys( firebaseErrors ).some( key => key === message );

        if ( checkError ) {
            this.message = firebaseErrors[message];
            throw new Error( this.message );
        }

        throw new Error( "Ошибка..." );
    }
}

export const fireError = new FirebaseError();