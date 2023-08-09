import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

class Database {
    async addUser( token: string ) {
        try {
            const data: unknown = { token };

            await setDoc( doc( db, "users", token ), data );

        } catch ( e ) {
            console.error( "Error adding document: ", e );
        }
    }
}

export const database = new Database();