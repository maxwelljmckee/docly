import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppBar, ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { GlobalHeader } from "./components/layout/GlobalHeader";
import { LeftSidebar } from "./components/layout/LeftSidebar";
import { RightSidebar } from "./components/layout/RightSidebar";
import { MainPageContent } from "./components/layout/MainPageContent";
import { Layout } from "./components/layout/Layout";
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
    <Layout>
      <AppBar
        position="fixed"
        sx={{ boxShadow: 0, margin: 0, gridArea: "header" }}
      >
        <GlobalHeader />
      </AppBar>
      <LeftSidebar />
      <RightSidebar />

      <MainPageContent>
        <Routes />
      </MainPageContent>
    </Layout>
  );
}

export default AppWrapper;
