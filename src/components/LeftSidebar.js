import React from "react";
import { Box } from "@mui/material";
import { Sections } from "./Sections";

export const LeftSidebar = () => {
  return (
    <Box
      elevation={6}
      sx={{
        display: "flex",
        flexDirection: "column",

        position: "fixed",
        left: 0,
        backgroundColor: "background.paper",

        width: 260,
        height: "100vh",
        paddingTop: "80px",

        borderRight: 1,
        borderColor: "border.primary",
        overflow: "auto",

        zIndex: 0,
      }}
    >
      <Sections />
    </Box>
  );
};
