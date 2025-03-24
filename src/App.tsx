import { ThemeProvider } from '@emotion/react'
import Login from './components/Login'
import { Box, createTheme } from '@mui/material'

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box width="100%" height="100%">
        <Login />
      </Box>
    </ThemeProvider>
  )
}

export default App
