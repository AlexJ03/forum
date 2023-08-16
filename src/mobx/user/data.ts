import { makeAutoObservable, toJS } from "mobx";
import type { IUserData } from "@types";
import type { IUserFullData } from "@types";

class Data {
    data: IUserData;
    users: IUserData[];
    fullUserData: IUserFullData;
    
    constructor() {
        makeAutoObservable( this );
    }

    setUser( data: IUserData ) {
        this.data = toJS( data );
    }

    getUser(): IUserData {
        return toJS( this.data );
    }

    setFullUserData( data: IUserFullData ) {
        this.fullUserData = data;
    }

    getFullUserData() {
        return toJS( this.fullUserData );
    }

    setUsers( data: IUserData[] ) {
        this.users = data;
    }

    getUsers() {
        return toJS( this.users );
    }
}

export const userData = new Data();