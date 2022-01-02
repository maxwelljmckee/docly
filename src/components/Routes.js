import React from "react";
import { Route } from "react-router-dom";
import { config } from "../config";

export const Routes = () => {
  const flattened = config.sections.reduce(
    (acc, section) => [...acc, ...section.pages],
    []
  );
  return (
    <>
      {flattened.map((page) => (
        <Route path={page.route} component={page.render} />
      ))}
    </>
  );
};
