// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif; /* Default font */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #fffffc;
    color: #333;
  }

  h1, h2, h3 {
    
  }

  p {
    font-family: 'Open Sans', sans-serif;
  }

  a {
    font-family: 'Satoshi', sans-serif;
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    font-family: 'Manrope', sans-serif;
    cursor: pointer;
  }
`;

export default GlobalStyles;
