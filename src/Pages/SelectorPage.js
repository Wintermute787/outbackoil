import React from "react";
import SelectorList from "../components/SelectorList";
import { useParams } from "react-router-dom";

const DUMMY_INFO = [
  {
    id: "p1",
    value: "BEST VALUE",
    bottles: "6",
    price: "$15.78",
    description1: "Today Only: $94.70 + Free USA Shipping",
    description2: "(This is a one-time payment. There are no monthly charges.)",
    footer: "THAT’S 20% OFF!",
    image:
      "https://go.korunutrition.org/hosted/images/93/38ce2f84454abf90f1bf70ce456ae7/3.png",
    creator: "u1"
  },
  {
    id: "p2",
    bottles: 3,
    price: "$16.62",
    description: "Today Only: $49.85 + Free USA Shipping",
    description2: "(This is a one-time payment. There are no monthly charges.)",
    footer: "THAT’S 16% OFF!",
    image:
      "https://go.korunutrition.org/hosted/images/f8/c9adba8fdd482a90d69f0b8c9d3f5b/2.png",
    creator: "u2"
  },
  {
    id: "p3",
    bottles: 1,
    price: "$19.95",
    description:
      "Retail: $19.95 per bottle + $4.95 USA Shipping Today Only: $19.95 + Free USA Shipping ",
    description2: "(This is a one-time payment. There are no monthly charges.)",
    footer: "SAVE $4.95 ON SHIPPING!",
    image:
      "https://go.korunutrition.org/hosted/images/d0/998e33d06543afb2f7bc635f10c30f/1.png",
    creator: "u3"
  }
];

const SelectorPage = () => {
  return <SelectorList items={DUMMY_INFO} />;
};

export default SelectorPage;
