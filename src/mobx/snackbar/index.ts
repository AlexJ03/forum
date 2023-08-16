import { makeAutoObservable } from "mobx";
import type { ISnackbar, statusSnackType } from "@types";

class Snackbar {
    data: ISnackbar = {
        status: "success",
        message: "",
        show: false
    };

    constructor() {
        makeAutoObservable( this );
    }

    open( message: string, status: statusSnackType ) {
        this.data = { message, show: true, status };
    }

    close() {
        this.data = { message: "", show: false, status: "success" };
    }
}

export const snackbar = new Snackbar();