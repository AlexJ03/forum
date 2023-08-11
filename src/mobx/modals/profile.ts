import { makeAutoObservable } from "mobx";

class Profile {
    show: boolean = false;

    constructor() {
        makeAutoObservable( this );
    }

    open() {
        this.show = true;
    }

    close() {
        this.show = false;
    }
}

export const userProfileModal = new Profile();