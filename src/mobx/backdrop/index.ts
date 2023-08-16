import { makeAutoObservable } from "mobx";

class Backdrop {
    show: boolean;

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

export const backdrop = new Backdrop();