import { observer } from "mobx-react-lite";
import React from "react";
import { Filter } from "../../../interfaces/filter";
import { ITodoItem, langEnum } from "../../../interfaces/todoItem";
import { useStores } from "../../../store/useStores";

import ComplitedTodo from "../../ComplitedTodo";
import DeleteTodo from "../../DeleteTodo";

import * as S from "./styles";

interface TodoItemProps {
    item: ITodoItem;
    filter: Filter;
}

const content = {
    header: {
        ru: "Описание задачи:",
        en: "Todo description:",
    },
    button: {
        ru: "Редактировать",
        en: "Edit",
    },
};

const TodoItem = observer(({ item, filter }: TodoItemProps) => {
    const modal = useStores().modalStore;
    const lang = useStores().locationStore.lang as keyof typeof langEnum;
    const modalEdit = () => {
        modal.openModal(item);
    };

    return (
        <S.Container isDone={item.isDone} filter={filter}>
            <S.NameItem isDone={item.isDone}>{item.name}</S.NameItem>
            <S.Label>{content.header[lang]}</S.Label>
            <S.BodyItem isDone={item.isDone}>{item.description}</S.BodyItem>
            <S.Control>
                <ComplitedTodo isDone={item.isDone} id={item.id} />
                <S.EditButton onClick={modalEdit}>
                    {content.button[lang]}
                </S.EditButton>
                <DeleteTodo id={item.id} />
            </S.Control>
            <S.Divider />
        </S.Container>
    );
});

export default TodoItem;
