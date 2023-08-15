import { makeAutoObservable, toJS } from "mobx";
import type { IUserData } from "@types";

class Data {
    data: IUserData;
    users: IUserData[];
    
    constructor() {
        makeAutoObservable( this );
    }

    setUser( data: IUserData ) {
        this.data = toJS( data );
    }

    getUser(): IUserData {
        return toJS( this.data );
    }

    setUsers( data: IUserData[] ) {
        this.users = data;
    }

    getUsers() {
        return toJS( this.users );
    }
}

export const userData = new Data();