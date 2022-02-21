import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: ${({ theme }) => theme.bodyBackground};
        color: ${({ theme }) => theme.textColor}
    }
`;

export default GlobalStyle;