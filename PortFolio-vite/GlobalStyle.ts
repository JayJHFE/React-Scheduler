import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        baground-color: #f0f0f0;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }
`;

export default GlobalStyle;
