import React from "react";
import { AppBar, Toolbar, ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { GlobalHeader } from "./components/GlobalHeader";
import { LeftSidebar } from "./components/LeftSidebar";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#222", paper: "#232323", modal: "#434343" },
    border: { primary: "#666" },
  },
});

const AppWrapper = () => {
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
    <>
      <AppBar position="fixed" sx={{ boxShadow: 0, margin: 0 }}>
        <GlobalHeader />
      </AppBar>
      <LeftSidebar />
    </>
  );
}
