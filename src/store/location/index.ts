import { makeAutoObservable } from "mobx";
import { Country } from "./getLocation";
// import { Location } from "./getLocation";

export class LocationStore {
    lang = "ru";

    constructor() {
        makeAutoObservable(this);
    }

    setIP(ip: string) {
        Country(ip).then((country) => {
            this.lang = country === "RU" ? "ru" : "en";
           
        });
    }
}
