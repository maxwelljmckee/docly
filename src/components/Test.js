import React from "react";
import { Paper } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";

const markdown = `# Main header
## secondary thing
## tertiary thing
#### quadiary thing

* Lists
* [ ] todo
* [x] done

A table:

| a | b |

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

A paragraph with *emphasis* and **strong importance**.
# Main header
## secondary thing
## tertiary thing
#### quadiary thing

* Lists
* [ ] todo
* [x] done

A table:

| a | b |

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

A paragraph with *emphasis* and **strong importance**.

`;

export const Test = () => {
  return (
    <Paper
      elevation={6}
      sx={{
        margin: "1.5rem",
        padding: "1.5rem",
        overflow: "auto",
        minWidth: 650,
        maxWidth: 900,
      }}
    >
      <ReactMarkdown remarkPlugins={[remarkGFM]}>{markdown}</ReactMarkdown>
    </Paper>
  );
};
