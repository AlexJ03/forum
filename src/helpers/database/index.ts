import { doc, setDoc, getDoc, getDocs, collection, arrayUnion, updateDoc } from "firebase/firestore";
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

    async createCategory( category: string ) {
        try {
            const data: any = { name: category };

            await setDoc( doc( db, "categories", category ), data );

        } catch ( e ) {
            console.error( "Error adding document: ", e );
        }
    }

    async getCategories() {
        const categories: any[] = [];

        const querySnapshot = await getDocs( collection( db, "categories" ) );

        querySnapshot.forEach( ( doc ) => {
            categories.push( doc.data() );
        } );

        return categories;
    }

    async createDiscussion( categoryName: string, question: string ) {
        try {
            const data: any = { name: question, category: categoryName };

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
}

export const database = new Database();