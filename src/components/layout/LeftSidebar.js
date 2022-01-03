import React from "react";
import { Box } from "@mui/material";
import { SectionsListing } from "../content/SectionsListing";

export const LeftSidebar = () => {
  return (
    <Box
      sx={{
        gridArea: "left-sidebar",
        borderRight: 1,
        borderColor: "border.primary",
        overflow: "auto",
      }}
    >
      <SectionsListing />
    </Box>
  );
};
