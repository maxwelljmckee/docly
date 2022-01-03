import React from "react";
import { useHistory } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { config } from "../../config";

export const SectionsListing = () => {
  const { push } = useHistory();
  const { sections = [] } = config;

  const handleClick = React.useCallback((section, page) => {
    push(`/${section}/${page}`);
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {sections.map((section) => (
        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: "background.default" }}
          >
            <Typography variant="subtitle1">{section.label}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ width: "100%", padding: 0 }}>
            <List>
              {section.pages.map((page) => (
                <ListItem
                  onClick={() => handleClick(section.name, page.name)}
                  sx={{
                    paddingLeft: 4,
                    "&:hover": {
                      backgroundColor: "background.modal",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Typography variant="body2">{page.label}</Typography>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
