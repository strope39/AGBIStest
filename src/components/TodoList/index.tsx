import React from "react";
import { ITodoItem } from "../../interfaces/todoItem";
import { Todos } from "../../stories/mocData/todos";

import TodoItem from "./TodoItem";

export interface TodoProps {
    props: ITodoItem;
    key: number;
}

const TodoList = () => {
    return (
        <>
            <div>"Список дел"</div>
            <div>
                {Todos.map((item) => (
                    <TodoItem item={item} key={item.id} />
                ))}
            </div>
        </>
    );
};

export default TodoList;
