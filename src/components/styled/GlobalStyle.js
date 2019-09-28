import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  --primary-color: #03AFC2; /**rgb(3,175,194) */
  --heading-color: #606060;
  --paragraph-color: #5A5A5A;
  --meta-color: #A7A7A7;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;

    @media screen and (max-width: 600px) {
      font-size: 9px;
    }

    /* @media screen and (max-width: 480px) {
      font-size: 8px;
    } */
  }

  body {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 3rem;
  }

  a,
  a:active,
  a:focus {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    text-decoration: none;
    outline: none;
  }

  ul {
    list-style-type: none;
  }



`;

export default GlobalStyle;
