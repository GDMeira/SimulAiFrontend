import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }
`;

export default GlobalStyle