import { makeAutoObservable } from "mobx";

class Data {
    user: any;
    
    constructor() {
        makeAutoObservable( this );
    }

    setUser( data: any ) {
        this.user = data;
    }
}

export const userData = new Data();