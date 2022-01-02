import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { config } from "../config";

export const Sections = () => {
  const { sections = [] } = config;
  return (
    <>
      {sections.map((section) => (
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ width: "100%", padding: 0 }}>
            <List>
              {section.pages.map((page) => (
                <ListItem
                  sx={{
                    paddingLeft: 4,
                    "&:hover": {
                      backgroundColor: "background.modal",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Typography variant="body1">{page}</Typography>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
