export const defaultTheme = {
  colors: {
    primary: '#007bff', // Blue
    secondary: '#6c757d', // Grey
    success: '#28a745', // Green
    danger: '#dc3545', // Red
    warning: '#ffc107', // Yellow
    info: '#17a2b8', // Cyan
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    black: '#000000',
  },
  fonts: {
    body: 'Roboto, sans-serif',
    headings: 'Georgia, serif',
  },
  fontSizes: {
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
    extraLarge: '1.5rem',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    extraLarge: '32px',
  },
  borderRadius: {
    small: '4px',
    default: '8px',
    large: '12px',
  },
};

export const darktheme = {
  primary: "#00bcd4",
  secondary: "#f3f3f3",
  border: "#e0e0e0",
  text: "#fff",
  background: "#212121",
  success: '#28a745', // Green
  danger: '#dc3545', // Red
  warning: '#ffc107', // Yellow
  info: '#17a2b8', // Cyan
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#ffffff',
  black: '#000000',
};

export const lightTheme = {
  primary: " #003366",
  secondary: "#eee",
  border: "#878787",
  text: "#000",
  background: "#fff",
  success: '#28a745', // Green
  danger: '#dc3545', // Red
  warning: '#ffc107', // Yellow
  info: '#17a2b8', // Cyan
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#ffffff',
  black: '#000000',
};

export const theme = {
  dark: {
    ...defaultTheme,
    colors: darktheme,
  },
  light: {
    ...defaultTheme,
    colors: lightTheme,
  },
};



