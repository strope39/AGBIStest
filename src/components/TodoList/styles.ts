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
        width: 50%;
    }
`;

export const Header = styled.h3`
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    height: 25px;
`;
