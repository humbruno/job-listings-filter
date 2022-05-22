import * as styled from 'styled-components';

const GlobalStyles = styled.createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap');

  :root {
    --bg-primary: hsl(180, 52%, 96%);

    --clr-primary: hsl(180, 29%, 50%);
    --clr-secondary: hsl(180, 14%, 20%);
    --clr-tertiary: hsl(180, 8%, 52%);

    --btn-filter: hsl(180, 31%, 95%);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: 'League Spartan', sans-serif; //weights 500 700

    min-height: 100vh;

    background: url('./assets/bg-header-desktop.svg'), var(--clr-primary);
  }

  @media (max-width: 768px) {
    body {
      background: url('./assets/bg-header-mobile.svg'), var(--clr-primary);
    }
  }
`;

export default GlobalStyles;
