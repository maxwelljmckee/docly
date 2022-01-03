import React from "react";
import { Box } from "@mui/material";

export const Layout = ({ children }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateAreas: `"header header header"
      "left-sidebar main-page-content right-sidebar"
    `,
      gridTemplateColumns: "260px 1fr 220px",
      gridTemplateRows: "80px 1fr",
      height: "100vh",
    }}
  >
    {children}
  </Box>
);
