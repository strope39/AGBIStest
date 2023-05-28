import React from "react";

type Props = { isDone: boolean };

const ComplitedTodo = (props: Props) => {
    return <div>{props.isDone ? "Выполнено" : "Не выполнено"}</div>;
};

export default ComplitedTodo;
