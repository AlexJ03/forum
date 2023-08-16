import { firebaseErrors } from "@utils";
import mobx from "@mobx";

class FirebaseError {
    message: string;

    setError( message: string ) {
        const checkError = Object.keys( firebaseErrors ).some( key => key === message );

        if ( checkError ) {
            this.message = firebaseErrors[message];
            mobx.snackbar.open( this.message, "error" );
            return;
        }

        mobx.snackbar.open( "Неизвестная ошибка", "error" );
        return;
    }
}

export const fireError = new FirebaseError();