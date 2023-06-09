import React from "react";
import { useStores } from "../../store/useStores";

import * as S from "./styles";

interface TodoID {
    id: number;
}

const DeleteTodo = ({ id }: TodoID) => {
    const todoStore = useStores().todoStore;
    const deleteItem = () => {
        todoStore.deleteItem(id);
    };

    return (
        <S.Container>
            <S.DelButton
                onClick={deleteItem}
                id="bold"
                enable-background="new 0 0 24 24"
                height="512"
                viewBox="0 0 24 24"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#2C4251"
                    d="m22.25 8.5h-20.5c-.414 0-.75-.336-.75-.75v-2c0-1.517 1.233-2.75 2.75-2.75h16.5c1.517 0 2.75 1.233 2.75 2.75v2c0 .414-.336.75-.75.75z"
                />
                <path
                    fill="#2C4251"
                    d="m3 9.5v11.75c0 1.517 1.233 2.75 2.75 2.75h12.5c1.517 0 2.75-1.233 2.75-2.75v-11.75zm5.75 10.5c0 .552-.447 1-1 1s-1-.448-1-1v-7.5c0-.552.447-1 1-1s1 .448 1 1zm4.25 0c0 .552-.447 1-1 1s-1-.448-1-1v-7.5c0-.552.447-1 1-1s1 .448 1 1zm4.25 0c0 .552-.447 1-1 1s-1-.448-1-1v-7.5c0-.552.447-1 1-1s1 .448 1 1z"
                />
                <path
                    fill="#2C4251"
                    d="m16 2v-.25c0-.965-.785-1.75-1.75-1.75h-4.5c-.965 0-1.75.785-1.75 1.75v.25z"
                />
            </S.DelButton>
        </S.Container>
    );
};

export default DeleteTodo;
