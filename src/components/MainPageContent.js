import React from "react";
import { Box } from "@mui/material";

export const MainPageContent = ({ children }) => (
  <Box
    sx={{
      position: "fixed",
      left: 260,
      top: 80,
      right: 250,
      overflow: "auto",
    }}
  >
    {children}
  </Box>
);
