import { makeAutoObservable } from "mobx";
import { ITodoItem } from "../../interfaces/todoItem";
import { Todos } from "../mocData/todos";

export class TodoStore {
    todos: ITodoItem[] = Todos;

    constructor() {
        makeAutoObservable(this);
    }

    addItem(name: string, description: string) {
        this.todos.unshift({
            id: Date.now(),
            name,
            description,
            isDone: false,
        });
    }

    updateItem(id: number, name: string, description: string) {
        this.todos.map((i) => {
            if (i.id === id) {
                i.name = name;
                i.description = description;
            }
            return i;
        });
    }

    isDoneItem(id: number) {
        this.todos = this.todos.map((i) => {
            if (i.id === id) {
                i.isDone = !i.isDone;
            }
            return i;
        });
    }

    deleteItem(id: number) {
        this.todos = this.todos.filter((i) => {
            return i.id !== id;
        });
    }
}
