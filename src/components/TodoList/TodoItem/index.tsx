import React from "react";
import { ITodoItem } from "../../../interfaces/todoItem";
import ComplitedTodo from "../../ComplitedTodo";
import DeleteTodo from "../../DeleteTodo";

interface TodoItemProps {
    item: ITodoItem;
}

const TodoItem = ({ item }: TodoItemProps) => {
    const modalEdit = () => {
        console.log(item.id);
    };
    return (
        <>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <ComplitedTodo isDone={item.isDone} />
            <button onClick={modalEdit}>Edit</button>
            <DeleteTodo />
        </>
    );
};

export default TodoItem;
