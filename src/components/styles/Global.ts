import * as styled from 'styled-components';

const GlobalStyles = styled.createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap');

  :root {
    --bg-primary: hsl(180, 52%, 96%); // background
    --bg-header: hsl(180, 29%, 50%);
    --lightGrayishCyan: hsl(180, 31%, 95%); // filter tablets
    --darkGrayishCyan: hsl(180, 8%, 52%);
    --veryDarkGrayishCyan: hsl(180, 14%, 20%);
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

    background: url('./assets/bg-header-desktop.svg'), var(--bg-header);
  }

  @media (max-width: 768px) {
    body {
      background: url('./assets/bg-header-mobile.svg'), var(--bg-header);
    }
  }
`;

export default GlobalStyles;
