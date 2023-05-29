import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 10px auto;
    padding: 20px;
    border: 1px solid grey;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    background-color: #fff;

    @media ${({ theme }) => theme.media.large} {
        width: 40%;
    }
`;

export const Header = styled.h3`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    height: 25px;
`;
export const NameInput = styled.input`
    border: 1px solid rgba(226, 125, 125, 0.8);
    height: 25px;
    margin-bottom: 10px;
    cursor: pointer;
`;
export const BodyInput = styled.textarea`
    border: 1px solid rgba(226, 125, 125, 0.8);
    height: 50px;
    margin-bottom: 10px;
    cursor: pointer;
`;
export const AddButton = styled.button`
    border: 2px solid rgba(226, 125, 125, 0.8);
    height: auto;
    cursor: pointer;
    font-weight: 600;
`;
export const Error = styled.div`
    margin-top: 5px;
    color: red;
    font-size: 12px;
`;
