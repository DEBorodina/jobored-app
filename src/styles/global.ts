import { createGlobalStyle } from 'styled-components';

import "@fontsource/inter";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-size: 16px;
    font-family: Inter;

    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
body {
  background-color: #F5F5F5
}
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
`