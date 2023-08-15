import { makeAutoObservable } from "mobx";
import type { toggleType } from "@types";

class Toggle {
    value: toggleType = "Категории";

    constructor() {
        makeAutoObservable( this );
    }

    changeValue( value: toggleType ) {
        this.value = value;
    }
}

export const toggle = new Toggle();