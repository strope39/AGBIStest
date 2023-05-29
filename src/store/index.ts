import { TodoStore } from "./todos";
import { LocationStore } from "./location";
import { TodoFilter } from "./filter";
import { ModalStore } from "./modal";

export enum StoresEnum {
    locationStore = "locationStore",
    todoStore = "todoStore",
    todoFilter = "todoFilter",
    modalStore = "modalStore",
}

export class RootStore {
    locationStore: LocationStore;
    todoStore: TodoStore;
    todoFilter: TodoFilter;
    modalStore: ModalStore;
    constructor() {
        this.locationStore = new LocationStore();
        this.todoStore = new TodoStore();
        this.todoFilter = new TodoFilter();
        this.modalStore = new ModalStore();
    }
}

export const stores = new RootStore();
