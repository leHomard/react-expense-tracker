import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f7f7f7;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  h2 {
    font-size: 24px;
    margin: 0;
    letter-spacing: 1px;
    font-size: xx-large
  }
  h3 {
    font-size: 18px;
    margin: 0;
  }
  h4 {
    margin: 0;
  }
`;

export default GlobalStyle;
