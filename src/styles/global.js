import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  button {
    font: inherit;
    background: #ff2058;
    padding: 0.5rem 2rem;
    color: white;
    border: 1px solid #ff2058;
    margin: 0.5rem 0;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover,
  button:active {
    background: white;
    color: #ff2058;
  }

  button:focus {
    outline: none;
  }

  button.button-outline {
    background: white;
    color: #ff2058;
  }

  button.button-outline:hover,
  button.button-outline:active {
    background: #ff2058;
    color: white;
    box-shadow: none;
  }
`;
