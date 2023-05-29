import React from "react";
import { useStores } from "../../store/useStores";

import * as S from "./styles";

type Props = { isDone: boolean; id: number };

const ComplitedTodo = ({ isDone, id }: Props) => {
    const todoStore = useStores().todoStore;
    const readyHandler = () => {
        todoStore.isDoneItem(id);
    };

    return <S.Done onClick={readyHandler} isDone={isDone}></S.Done>;
};

export default ComplitedTodo;
