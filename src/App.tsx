import { observer } from "mobx-react-lite";
import React from "react";
// import { ThemeProvider } from "styled-components";

// import GlobalStyles from "./styles/global";


import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = observer(() => {
    return (
        <>
            <AddTodo />
            <TodoList />
        </>
    );
});

export default App;
