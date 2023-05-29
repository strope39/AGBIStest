import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    font-size: 16px;
    background-color: rgba(226,125,125, 0.8);
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  table {
    margin: 0;
  }
`;
