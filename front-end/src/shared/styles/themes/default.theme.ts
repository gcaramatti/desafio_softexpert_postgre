import { DefaultThemeType } from './defaultTheme.types';

export const defaultTheme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    whiteOpacity: '#FFFFFF60',
    blackOpacity: '#00000040',
    primary: '#0e1e2b',
    secondary: '#62cee1',
    secondaryOpacity: '#62cee180',
    danger: '#bb2124',
    success: '#4a934a',
    alabaster: '#ede9e0',
    disabled: '#aaaaaa',
    transparent: 'transparent'
  }
};

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeType {}
}
