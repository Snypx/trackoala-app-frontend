import { ThemeProvider } from "@emotion/react";
// import Login from './pages/Login'
import { Box, createTheme } from "@mui/material";
import InventoryNavigation from "./pages/MainLayout";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box width="100%" height="100%">
        {/* <Login /> */}

        <InventoryNavigation />
      </Box>
    </ThemeProvider>
  );
};

export default App;
