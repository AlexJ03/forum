import type { Toggle } from "@mobx";

export type toggleHomeType = "Категории" | "Пользователи";
export type toggleProfileType = "Вопросы" | "Ответы";

export interface IToggle<T> {
    data: T[];
    currentToggle: Toggle<T>
}