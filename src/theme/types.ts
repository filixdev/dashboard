interface ColorScheme {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
  white: string;
  black: string;
  border: string;
  text: string;
  background: string;
}

export interface FontProperties {
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  color: string;
  fontStyle: string;
}

interface FontsScheme {
  heading1: FontProperties;
  heading2: FontProperties;
  heading3: FontProperties;
  body: FontProperties;
}

export interface BaseTheme {
  colors: ColorScheme;
  fonts: FontsScheme;
}

export interface Theme {
  dark: BaseTheme;
  light: BaseTheme;
}
