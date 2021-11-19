import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
    
*, *::before, *::after {
  box-sizing: inherit;
}
    
ul, li, h1, h2, h3, p, button {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
button { 
  background: transparent;
  border: 0;
  outline: 0;
}
body {
  background: #fefefe;
  height: 100vh;
  margin: 0 auto;
  overscroll-behavior: none;
  width: 100%;
}


@font-face {
  font-family: 'Nunito Sans';
  src: url('./assets/fonts/NunitoSans-SemiBold.woff2') format('woff2'),
      url('./assets/fonts/NunitoSans-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Nunito Sans';
  src: url('./assets/fonts/NunitoSans-Bold.woff2') format('woff2'),
      url('./assets/fonts/NunitoSans-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Nunito Sans';
  src: url('./assets/fonts/NunitoSans-Light.woff2') format('woff2'),
      url('./assets/fonts/NunitoSans-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Nunito Sans';
  src: url('./assets/fonts/NunitoSans-Regular.woff2') format('woff2'),
      url('./assets/fonts/NunitoSans-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`
