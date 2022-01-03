import React from "react";
import { Box } from "@mui/material";

export const RightSidebar = () => {
  return (
    <Box
      id="right-sidebar"
      sx={{
        gridArea: "right-sidebar",
        borderLeft: 1,
        borderColor: "border.primary",
        overflow: "auto",
      }}
    >
      <div>stuff</div>
    </Box>
  );
};
