import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ThemeProvider,
  CssBaseline,
  Box,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { GlobalHeader } from "./components/GlobalHeader";
import { LeftSidebar } from "./components/LeftSidebar";
import { RightSidebar } from "./components/RightSidebar";
import { MainPageContent } from "./components/MainPageContent";
import { Routes } from "./components/Routes";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#222", paper: "#232323", modal: "#434343" },
    border: { primary: "#555" },
  },
});

const AppWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

function App() {
  return (
    <>
      <AppBar position="fixed" sx={{ boxShadow: 0, margin: 0 }}>
        <GlobalHeader />
      </AppBar>
      <LeftSidebar />
      <RightSidebar />

      <MainPageContent>
        <Routes />
      </MainPageContent>
    </>
  );
}

export default AppWrapper;
