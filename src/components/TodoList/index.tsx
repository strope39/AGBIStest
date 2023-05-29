import React from "react";

import TodoItem from "./TodoItem";

import * as S from "./styles";
import { useStores } from "../../store/useStores";
import { observer } from "mobx-react-lite";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";
import { langEnum } from "../../interfaces/todoItem";

const content = {
    header: {
        ru: "СПИСОК ДЕЛ",
        en: "TODO LIST",
    },
};

const TodoList = observer(() => {
    const Todos = useStores().todoStore.todos;
    const filter = useStores().todoFilter.filter;
    const lang = useStores().locationStore.lang as keyof typeof langEnum;
    return (
        <S.Container>
            <S.Header>{content.header[lang]}</S.Header>
            <TodoFilter />
            <div>
                {Todos.map((item) => (
                    <TodoItem item={item} key={item.id} filter={filter} />
                ))}
            </div>
            <TodoModal />
        </S.Container>
    );
});

export default TodoList;
