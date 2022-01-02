import React from "react";
import { Test } from "./components/Test";

export const config = {
  logo: {
    img: "https://cdn.drawception.com/drawings/Srn8mGPNqj.png",
    text: "no-dux",
  },
  sections: [
    {
      name: "section1",
      label: "Section 1",
      pages: [
        {
          name: "things",
          label: "Things",
          route: "/section1/things",
          render: () => <div>stuff</div>,
        },
        {
          name: "stuff",
          label: "Stuff",
          route: "/section1/stuff",
          render: Test,
        },
        {
          name: "monkeys",
          label: "Monkeys",
          route: "/section1/monkeys",
          render: () => <div>stuff</div>,
        },
        {
          name: "bananas",
          label: "Bananas",
          route: "/section1/bananas",
          render: () => <div>stuff</div>,
        },
      ],
    },
    {
      name: "section2",
      label: "Section 2",
      pages: [
        {
          name: "bango",
          label: "Bango",
          route: "section2/bango",
          render: Test,
        },
        {
          name: "bongo",
          label: "Bongo",
          route: "/section2/bongo",
          render: Test,
        },
      ],
    },
    {
      name: "section3",
      label: "Section 3",
      pages: [
        {
          name: "flimflam",
          label: "Flim Flam",
          route: "/section3/flimflam",
          render: Test,
        },
        {
          name: "jimjam",
          label: "Jim Jam",
          route: "/section3/jimjam",
          render: Test,
        },
      ],
    },
  ],
};
