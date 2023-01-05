import { defaultTheme, RaThemeOptions } from 'react-admin';

export const customTheme: RaThemeOptions = {
  ...defaultTheme,
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
  typography: {
    h1: { fontSize: 96, fontWeight: 600 },
    h2: { fontSize: 60, fontWeight: 600 },
    h3: { fontSize: 48, fontWeight: 600 },
    h4: { fontSize: 34, fontWeight: 500 },
    h5: { fontSize: 24, fontWeight: 500 },
    h6: { fontSize: 21, fontWeight: 700 },
    subtitle1: { fontSize: 17, fontWeight: 700 },
    subtitle2: { fontSize: 15, fontWeight: 700 },
    body1: { fontSize: 16, fontWeight: 600 },
    body2: { fontSize: 14, fontWeight: 400 },
    button: {
      fontSize: 14,
      fontWeight: 800
    },
    caption: {
      fontSize: 12,
      fontWeight: 600
    }
  }
};
