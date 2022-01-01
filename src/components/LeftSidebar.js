import React from "react";
import { Box, Paper, Toolbar } from "@mui/material";

export const LeftSidebar = () => {
  return (
    <Paper elevation={10}>
      <Box
        elevation={6}
        sx={{
          display: "flex",
          flexDirection: "column",

          width: 300,
          height: "100vh",
          paddingTop: "80px",

          position: "fixed",
          left: 0,
          backgroundColor: "background.paper",

          borderRight: 1,
          borderColor: "border.primary",

          zIndex: 0,
        }}
      >
        <ul>
          {Array(10)
            .fill(1)
            .map((el) => (
              <li>thingStuff</li>
            ))}
        </ul>
      </Box>
    </Paper>
  );
};
