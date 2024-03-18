import { ThemeProvider } from 'styled-components';
import './App.css'
import { AppRoutes } from './routes'
import { useState } from 'react';
import { darkTheme, lightTheme } from './theme/theme';

function App() {

  const [theme, setTheme] = useState(lightTheme);
  
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes toggleTheme={toggleTheme} theme={theme}/>
    </ThemeProvider>
  )
}

export default App