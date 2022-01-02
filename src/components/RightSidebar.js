import React from "react";
import { Box } from "@mui/material";

export const RightSidebar = () => {
  return (
    <Box
      id="right-sidebar"
      elevation={6}
      sx={{
        display: "flex",
        flexDirection: "column",

        position: "fixed",
        right: 0,
        backgroundColor: "background.paper",

        width: 250,
        height: "100vh",
        paddingTop: "80px",

        borderLeft: 1,
        borderColor: "border.primary",
        overflow: "auto",

        zIndex: 0,
      }}
    >
      <div>stuff</div>
    </Box>
  );
};
