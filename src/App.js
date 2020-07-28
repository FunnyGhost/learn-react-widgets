import React from "react";
import Accordion from "./components/Accordion";

const items = [
  { title: "Who are you?", content: "Batman" },
  { title: "Who is your butler?", content: "Alfred" },
  { title: "Who is your nemesis?", content: "Joker" },
];

export default () => {
  return (
    <div>
      <Accordion items={items}></Accordion>
    </div>
  );
};
