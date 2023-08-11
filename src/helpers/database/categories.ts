import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

class Categories {
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
}

export const categories = new Categories();