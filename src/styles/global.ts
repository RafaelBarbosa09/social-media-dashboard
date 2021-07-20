import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --lime-green: hsl(163, 72%, 41%);
    --bright-red: hsl(356, 69%, 56%);
    --facebook: hsl(208, 92%, 53%);
    --twitter: hsl(203, 89%, 53%);
    -youTube: hsl(348, 97%, 39%);
    --yellow: hsl(37, 97%, 70%);
    --pink: hsl(329, 70%, 58%);

    --toggle-light: hsl(230, 22%, 74%);
    /* #### Dark Theme
    - Toggle: linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%) */

    /* dark */
    --very-dark-blue-bg: hsl(230, 17%, 14%);
    --very-dark-blue-top-bg: hsl(232, 19%, 15%);
    --dark-card-bg: hsl(228, 28%, 20%);
    --blue-text: hsl(228, 34%, 66%);
    --white: hsl(0, 0%, 100%);

    /* light */
    --white-bg: hsl(0, 0%, 100%);
    --top-bg-light: hsl(225, 100%, 98%);
    --light-blue-bg: hsl(227, 47%, 96%);
    --dark-blue-text: hsl(228, 12%, 44%);
    --very-dark-blue: hsl(230, 17%, 14%);
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  @media(max-width: 1080px) {
      font-size: 93.75%;
  }
  @media(max-width: 720px) {
      font-size: 87.5%;
  }
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, textArea, button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 700;
}

button {
  cursor: pointer;
}
/* background: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%)); */
`;