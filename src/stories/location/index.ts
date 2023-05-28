import { makeAutoObservable } from "mobx";

export class LocationStore {
    location = navigator.language === "ru" ? "ru" : "en"

    constructor() {
        makeAutoObservable(this)
    }

}