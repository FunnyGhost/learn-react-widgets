import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrakaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  return (
    <div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      ></Dropdown>
    </div>
  );
};

export default Translate;