import styled from "styled-components";
import { Filter } from "../../../interfaces/filter";

export const Container = styled.div<{ isDone: boolean; filter: Filter }>`
    width: 100%;
    margin: 10px auto;
    padding: 0 20px;

    display: ${({ isDone, filter }) => {
        if (filter === "all") {
            return "flex";
        } else if (filter === "done" && isDone) {
            return "flex";
        } else if (filter === "progress" && !isDone) {
            return "flex";
        } else {
            return "none";
        }
    }};
    flex-direction: column;
    height: fit-content;
    background-color: #fff;
`;

export const Header = styled.h3`
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    height: 25px;
`;
export const NameItem = styled.h4<{ isDone: boolean }>`
    text-align: center;
    padding: 3px;
    height: 25px;
    margin-bottom: 10px;

    text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;
export const BodyItem = styled.div<{ isDone: boolean }>`
    border: 1px solid rgba(226, 125, 125, 0.6);
    padding: 3px;
    border-radius: 3px;
    height: auto;
    margin-bottom: 10px;
    text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;
export const EditButton = styled.button`
    border: 2px solid rgba(226, 125, 125, 0.8);
    height: auto;
    cursor: pointer;
    font-weight: 600;
`;

export const Divider = styled.div`
    margin-top: 10px;
    border-bottom: 2px solid rgba(226, 125, 125, 1);
    width: 100%;
`;

export const Label = styled.div`
    padding-left: 10px;
    height: 15px;
    font-size: 12px;
    margin-bottom: 3px;
`;

export const Control = styled.div`
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
`;
