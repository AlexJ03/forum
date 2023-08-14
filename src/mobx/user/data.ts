import { makeAutoObservable, toJS } from "mobx";
import type { IUserData } from "@types";

class Data {
    data: IUserData;
    
    constructor() {
        makeAutoObservable( this );
    }

    setUser( data: IUserData ) {
        this.data = toJS( data );
    }

    getUser(): IUserData {
        return toJS( this.data );
    }
}

export const userData = new Data();