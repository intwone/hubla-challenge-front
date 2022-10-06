import { createGlobalStyle } from 'styled-components';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.main};
      border-radius: 10px;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
