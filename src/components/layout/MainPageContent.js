import React from "react";
import { Box } from "@mui/material";

export const MainPageContent = ({ children }) => (
  <Box
    sx={{
      gridArea: "main-page-content",
      margin: "0 auto",
      overflow: "auto",
      width: "100%",
    }}
  >
    {children}
  </Box>
);
