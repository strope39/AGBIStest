import { makeAutoObservable } from "mobx";
import { ITodoItem } from "../../interfaces/todoItem";
import { Todos } from "../mocData/todos";

export class TodoStore {
    todos: ITodoItem[] = Todos;

    constructor() {
        makeAutoObservable(this);
    }
}
