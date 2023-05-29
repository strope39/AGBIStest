import React from "react";
import { langEnum } from "../../../interfaces/todoItem";
import { useStores } from "../../../store/useStores";

import * as S from "./styles";

const content = {
    all: {
        ru: "все задачи",
        en: "all todos",
    },
    done: {
        ru: "только завершенные задачи",
        en: "complited todos only",
    },
    progress: {
        ru: "задачи в процессе выполнения",
        en: "todos in progress only",
    },
};

const TodoFilter = () => {
    const filterStore = useStores().todoFilter;
    const lang = useStores().locationStore.lang as keyof typeof langEnum;
    return (
        <S.Container>
            <S.Cont>
                <S.Radio
                    type="radio"
                    name="filter"
                    id="all"
                    defaultChecked={true}
                    onClick={() => {
                        filterStore.setFilter("all");
                    }}
                />
                <S.Label htmlFor="all">- {content.all[lang]}</S.Label>
            </S.Cont>
            <S.Cont>
                <S.Radio
                    type="radio"
                    name="filter"
                    id="done"
                    onClick={() => {
                        filterStore.setFilter("done");
                    }}
                />
                <S.Label htmlFor="done">- {content.done[lang]}</S.Label>
            </S.Cont>
            <S.Cont>
                <S.Radio
                    type="radio"
                    name="filter"
                    id="progress"
                    onClick={() => {
                        filterStore.setFilter("progress");
                    }}
                />
                <S.Label htmlFor="progress">- {content.progress[lang]}</S.Label>
            </S.Cont>
        </S.Container>
    );
};

export default TodoFilter;
