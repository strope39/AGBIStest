import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";

import { useStores } from "../../../store/useStores";

import * as S from "./styles";

const TodoModal = observer(() => {
    const modal = useStores().modalStore;
    const todoStore = useStores().todoStore;
    const [name, setName] = useState<string>(modal.item.name);
    const [description, setDescription] = useState<string>(
        modal.item.description
    );

    useEffect(() => {
        setName(modal.item.name);
        setDescription(modal.item.description);
    }, [modal.item.name, modal.item.description]);

    const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        setName(event.target.value);
    };
    const descriptionHandler = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        event.stopPropagation();
        setDescription(event.target.value);
    };

    const saveHandler = () => {
        todoStore.updateItem(modal.item.id, name, description);
        modal.closeModal();
        setName("");
        setDescription("");
    };

    return (
        <S.Modal displ={modal.displayModal ? "block" : "none"}>
            <S.Container>
                <div>
                    <S.Label>Измените название задачи</S.Label>
                    <S.NameInput
                        type="text"
                        value={name}
                        onChange={nameHandler}
                    />
                </div>
                <div>
                    <S.Label>Измените описание задачи</S.Label>
                    <S.BodyInput
                        value={description}
                        onChange={descriptionHandler}
                    />
                </div>
                <div>
                    <S.SaveButton onClick={saveHandler}>Сохранить</S.SaveButton>
                </div>
            </S.Container>
        </S.Modal>
    );
});

export default TodoModal;
