import React, { useState } from "react";
import Translate from "./components/Translate";

const items = [
  { title: "Who are you?", content: "Batman" },
  { title: "Who is your butler?", content: "Alfred" },
  { title: "Who is your nemesis?", content: "Joker" },
];

const champions = [
  { label: "I Am Batman", value: "batman" },
  { label: "HahahahHAhHAHHAhA", value: "joker" },
  { label: "I Will Destroy you", value: "bane" },
];

export default () => {
  const [selectedChampion, selectChampion] = useState(champions[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items}></Accordion> */}
      {/* <Search></Search> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={champions}
          selected={selectedChampion}
          onSelectedChange={selectChampion}
        ></Dropdown>
      ) : (
        ""
      )} */}
      <Translate></Translate>
    </div>
  );
};
