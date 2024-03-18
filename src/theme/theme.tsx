import { BaseTheme } from "./types";

export const baseTheme: BaseTheme = {
  colors: {
    primary: "#00bcd4",
    secondary: "#f3f3f3",
    border: "#e0e0e0",
    text: "#fff",
    background: "#212121",
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    black: '#000000',
  },
  fonts: {
    heading1: {
      fontFamily: 'Roboto , sans-serif',
      fontWeight: 'bold',
      fontSize: '2rem',
      color: 'black',
      fontStyle: 'normal',
    },
    heading2: {
      fontFamily: 'Roboto , sans-serif',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      color: 'black',
      fontStyle: 'normal',
    },
    heading3: {
      fontFamily: 'Roboto , sans-serif',
      fontWeight: 'bold',
      fontSize: '1.25rem',
      color: 'black',
      fontStyle: 'normal',
    },
    body: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 'normal',
      fontSize: '1rem',
      color: 'black',
      fontStyle: 'normal',
    },
  }
  // fontSizes: {
  //   small: '0.8rem',
  //   medium: '1rem',
  //   large: '1.2rem',
  //   extraLarge: '1.5rem',
  // },
};

export const darkTheme: BaseTheme = {
  ...baseTheme,
  colors: {
    primary: "#00bcd4",
    secondary: "#f3f3f3",
    border: "#e0e0e0",
    text: "#fff",
    background: "#212121",
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    black: '#000000',
  }
};

export const lightTheme: BaseTheme = {
  ...baseTheme,
  colors: {
    primary: " #003366",
    secondary: "#eee",
    border: "#878787",
    text: "#000",
    background: "#fff",
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    black: '#000000',
  }
};



