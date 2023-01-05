import { DefaultTheme } from 'styled-components';
import { createGlobalStyle, ThemeProps } from 'styled-components';

const fontSize = {
  h1: 96,
  h2: 60,
  h3: 48,
  h4: 34,
  h5: 24,
  h6: 21,
  sub: 17,
  sub2: 15,
  body: 16,
  body2: 14,
  buttonText: 14,
  caption: 12
};

const fontWeight = {
  h1: 600,
  h2: 600,
  h3: 600,
  h4: 500,
  h5: 500,
  h6: 700,
  sub: 700,
  sub2: 700,
  body: 600,
  body2: 400,
  buttonText: 800,
  caption: 600
};

export const styledTheme: DefaultTheme = {
  name: 'defaultTheme',
  palette: {
    background: {
      default: '#2e3551'
    },
    primary: {
      light: '#d8dfff',
      main: '#2e3551',
      dark: '#333333',
      contrastText: '#FFF'
    },
    secondary: {
      light: '#1e98d7',
      main: '#4f567d',
      dark: '#4059AD',
      contrastText: '#FFF'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f'
    },
    warning: {
      light: '#ffb74d',
      main: '#ffa726',
      dark: '#f57c00'
    },
    info: {
      light: '#4fc3f7',
      main: '#29b6f6',
      dark: '#0288d1'
    },
    success: {
      light: '#81c784',
      main: '#66bb6a',
      dark: '#388e3c'
    }
  },
  fontSize,
  fontWeight
};

export const GlobalStyles = createGlobalStyle`

h1 {
    font-size: ${(props) => props.theme.fontSize.h1}px;
},
h2 {
    font-size: ${(props) => props.theme.fontSize.h2}px;
}
h3 {
    font-size: ${(props) => props.theme.fontSize.h3}px;
}
h4 {
    font-size: ${(props) => props.theme.fontSize.h4}px;
}
h5 {
    font-size: ${(props) => props.theme.fontSize.h5}px;
}

h6 {
    font-size: ${(props) => props.theme.fontSize.h6}px;
}



`;
