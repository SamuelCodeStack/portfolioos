import React from "react";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import WindowsDesktop from "./components/WindowsDesktop";
import IPadLayout from "./components/IPadLayout";
import IPhoneLayout from "./components/IPhoneLayout";

const theme = createTheme({
  palette: {
    mode: "light", // Windows 11 light mode
  },
});

function App() {
  const muiTheme = useTheme();
  const isDesktop = useMediaQuery(muiTheme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between("md", "lg"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          position: "fixed", // Forces it to the screen edges
          top: 0,
          left: 0,
        }}
      >
        {isDesktop && <WindowsDesktop />}
        {isTablet && <IPadLayout />}
        {!isDesktop && !isTablet && <IPhoneLayout />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
