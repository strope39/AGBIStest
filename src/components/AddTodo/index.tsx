import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { langEnum } from "../../interfaces/todoItem";
import { useStores } from "../../store/useStores";

import * as S from "./styles";

const content = {
    header: {
        ru: "ДОБАВИТЬ ЗАДАЧУ",
        en: "ADD TODO",
    },
    placeholder: {
        name: {
            ru: "Название задачи",
            en: "Enter name",
        },
        descr: {
            ru: "Описание задачи",
            en: "Enter description",
        },
    },
    button: {
        ru: "Добавить задачу",
        en: "Add todo",
    },
    error: {
        ru: "Поля Имя и Описание не должны быть пустыми",
        en: "Fields Name and Description must not be empty",
    },
};

const AddToDo = observer(() => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const todoStore = useStores().todoStore;
    const lang = useStores().locationStore.lang as keyof typeof langEnum;

    const Add = () => {
        if (name.length !== 0 && description.length !== 0) {
            setError(false);
            todoStore.addItem(name, description);
            setName("");
            setDescription("");
        } else {
            setError(true);
        }
    };
    return (
        <S.Container>
            <S.Header>{content.header[lang]}</S.Header>
            <S.NameInput
                type="text"
                placeholder={content.placeholder.name[lang]}
                onChange={(e) => setName(e.target.value)}
                value={name}
            ></S.NameInput>
            <S.BodyInput
                placeholder={content.placeholder.descr[lang]}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></S.BodyInput>
            <S.AddButton onClick={Add}>{content.button[lang]}</S.AddButton>

            <S.Error>
                {error ? "Поля Имя и Описание не должны быть пустыми" : ""}
            </S.Error>
        </S.Container>
    );
});

export default AddToDo;
