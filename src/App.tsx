import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import { baseTheme } from "./styles/common";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Location } from "./store/location/getLocation";

import styled from "styled-components";
import { useStores } from "./store/useStores";

const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media ${({ theme }) => baseTheme.media.medium} {
        flex-direction: row;
        gap: 20px;
    }
`;

const App = observer(() => {
    const location = useStores().locationStore;

    useEffect(() => {
        Location().then((responce) => location.setIP(responce.ip));
    }, []);

    return (
        <Container>
            <ThemeProvider theme={baseTheme}>
                <AddTodo />
                <TodoList />

                <GlobalStyles />
            </ThemeProvider>
        </Container>
    );
});

export default App;
