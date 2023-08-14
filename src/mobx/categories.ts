import { makeAutoObservable, toJS } from "mobx";
import type { ICategory } from "@types";

class Categories {
    categories: ICategory[];

    constructor() {
        makeAutoObservable( this );
    }

    setCategories( categories: ICategory[] ) {
        this.categories = categories;
    }

    getCategories() {
        return toJS( this.categories );
    }
}

export const categories = new Categories();