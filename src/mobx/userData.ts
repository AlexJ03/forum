import { makeAutoObservable } from "mobx";

class UserData {
    user: any;
    
    constructor() {
        makeAutoObservable( this );
    }

    setUser( data: any ) {
        this.user = data;
    }

}

export const userData = new UserData();