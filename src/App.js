import React from "react";
import { AppBar, Toolbar, ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { GlobalHeader } from "./GlobalHeader";

const AppWrapper = () => {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          background: { default: "#222", paper: "#232323", modal: "#434343" },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper;

function App() {
  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: "#222" }}>
        <GlobalHeader />
      </Toolbar>
    </AppBar>
  );
}
