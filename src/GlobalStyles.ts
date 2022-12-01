import {createGlobalStyle} from "styled-components";

export let PADDINGSIZE = 15
export let COLORBAR = '#924AD9'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: ${PADDINGSIZE}px;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
