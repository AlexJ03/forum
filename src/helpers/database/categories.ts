import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "@firebase-config";
import { type WithFieldValue } from "@firebase/firestore";
import type { ICategory } from "../../types/database/entities/categories";

class Categories {
    async createCategory( category: string ) {
        try {
            const data: WithFieldValue<ICategory> = { name: category };

            await setDoc( doc( db, "categories", category ), data );

        } catch ( e ) {
            console.error( "Error adding document: ", e );
        }
    }

    async getCategories() {
        const categories: ICategory[] = [];

        const querySnapshot = await getDocs( collection( db, "categories" ) );

        querySnapshot.forEach( ( doc ) => {
            categories.push( <ICategory>doc.data() );
        } );

        return categories;
    }
}

export const categories = new Categories();