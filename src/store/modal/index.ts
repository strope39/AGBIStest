import { makeAutoObservable } from "mobx";
import { ITodoItem } from "../../interfaces/todoItem";

export class ModalStore {
    displayModal: boolean = false;

    item: ITodoItem = {
        id: 0,
        name: "",
        description: "",
        isDone: false,
    };

    constructor() {
        makeAutoObservable(this);
    }

    openModal(todo: ITodoItem) {
        this.item = todo;
        this.displayModal = true;
    }

    closeModal() {
        this.displayModal = false;
    }
}
