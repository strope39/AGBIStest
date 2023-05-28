import React, { useState } from "react";
import { ITodoItem } from "../../../interfaces/todoItem";

const TodoModal = (item: ITodoItem) => {
    const [isDone, setIsDone] = useState<boolean>(item.isDone);

    return (
        <div>
            <div>
                <div>Измените название задачи</div>
                <input type="text" value={item.name} />
            </div>
            <div>
                <div>Измените описание задачи</div>
                <input type="text" value={item.description} />
            </div>
            <div>
                <div>Измените статус задачи</div>
                <input
                    type="checkbox"
                    defaultChecked={isDone}
                    onClick={() => setIsDone(!isDone)}
                />
            </div>
        </div>
    );
};

export default TodoModal;
