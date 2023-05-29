import styled from "styled-components";

export const Done = styled.div<{ isDone: boolean }>`
    cursor: pointer;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(226, 125, 125, 0.8);
    border-radius: 50%;
    background-color: ${({ isDone }) =>
        isDone ? "rgba(226, 125, 125, 0.8)" : "white"};
`;
