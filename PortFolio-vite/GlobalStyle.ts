import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: 100vh;
        width: 100vw;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }
`;

export default GlobalStyle;
