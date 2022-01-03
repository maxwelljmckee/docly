import React from "react";
import { Box, Avatar, Typography, Toolbar } from "@mui/material";
import { config } from "../../config";

export const GlobalHeader = () => {
  const { logo = {} } = config;

  return (
    <Toolbar
      disableGutters
      sx={{
        backgroundColor: "background.default",
        borderBottom: 1,
        borderColor: "border.primary",
        zIndex: 100,
        height: 80,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {logo.img ? (
            <Avatar
              src={logo.img}
              alt={logo.text}
              sx={{ width: 50, height: 50, margin: "8px 12px" }}
              variant="circular"
            />
          ) : null}
          {logo.text ? <Typography variant="h4">{logo.text}</Typography> : null}
        </Box>
      </Box>
    </Toolbar>
  );
};
