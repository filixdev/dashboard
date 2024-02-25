import { ThemeProvider } from 'styled-components'
import './App.css'
import { AppRoutes } from './routes'
import { theme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
