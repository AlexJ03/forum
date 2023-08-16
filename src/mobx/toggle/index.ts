import { makeAutoObservable } from "mobx";
import type { toggleHomeType, toggleProfileType } from "@types";

export class Toggle<T> {
    value: T;

    constructor( defaultValue: T ) {
        makeAutoObservable( this );
        this.value = defaultValue;
    }

    changeValue( value: T ) {
        this.value = value;
    }
}

export const toggleHome = new Toggle<toggleHomeType>( "Категории" );
export const toggleProfile = new Toggle<toggleProfileType>( "Вопросы" );