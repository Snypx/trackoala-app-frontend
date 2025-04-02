import { ThemeProvider } from '@emotion/react'
// import Login from './pages/Login'
import { Box, createTheme } from '@mui/material'
import Header from './components/Header'
import SideDrawer from './components/SideDrawer'

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box width="100%" height="100%">
        {/* <Login /> */}
        <Header />
        <SideDrawer />
      </Box>
    </ThemeProvider>
  )
}

export default App
