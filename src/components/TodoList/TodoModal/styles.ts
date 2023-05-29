import styled from "styled-components";

export const Modal = styled.div<{ displ: string }>`
    display: ${({ displ }) => {
        return displ;
    }};
    opacity: 95%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 5px;
    background-color: #fff;
    z-index: 100;
`;

export const Container = styled.div`
    margin: 100px auto;
    padding: 10px;
    width: 40%;
    min-width: 320px;
    height: fit-content;
    border: 1px solid rgb(226, 125, 125);
    background-color: rgba(226, 125, 125, 0.8);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

export const NameInput = styled.input`
    width: 100%;
`;

export const BodyInput = styled.textarea`
    width: 100%;
`;

export const Label = styled.div`
    font-size: 12px;
`;

export const SaveButton = styled.button`
    margin: 0 auto;
    border: 2px solid rgba(226, 125, 125, 0.8);
    border-radius: 5px;
    width: 100px;
    height: 30px;
    cursor: pointer;
    font-weight: 600;
`;
