import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    palette: {
      background: { default: string; paper: string };
      primary: { light: string; main: string; dark: string; contrastText: string };
      secondary: { light: string; main: string; dark: string; contrastText: string };
      error: { light: string; main: string; dark: string };
      warning: { light: string; main: string; dark: string };
      info: { light: string; main: string; dark: string };
      success: { light: string; main: string; dark: string };
    };
    fontSize: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
      sub: number;
      sub2: number;
      body: number;
      body2: number;
      buttonText: number;
      caption: number;
    };
    fontWeight: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
      sub: number;
      sub2: number;
      body: number;
      body2: number;
      buttonText: number;
      caption: number;
    };
  }
}
