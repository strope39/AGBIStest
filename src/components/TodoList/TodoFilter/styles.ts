import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 10px auto;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    height: fit-content;
    background-color: #fff;
`;

export const Radio = styled.input`
    margin-right: 5px;
    cursor: pointer;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(226, 125, 125, 0.8);
    border-radius: 50%;
`;

export const Label = styled.label`
    margin-left: 5px;
    height: 18px;
    line-height: 18px;
    font-size: 12px;
`;

export const Cont = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;
