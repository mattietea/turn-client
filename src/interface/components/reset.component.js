import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,500');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
  }

  button {
    font: inherit;
    border: none;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    line-height: 1;
  }
`
