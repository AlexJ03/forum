import { makeAutoObservable, toJS } from "mobx";

class Categories {
    categories: any;

    constructor() {
        makeAutoObservable( this );
    }

    setCategories( categories: any ) {
        this.categories = categories;
    }

    getCategories() {
        return toJS( this.categories );
    }
}

export const categories = new Categories();