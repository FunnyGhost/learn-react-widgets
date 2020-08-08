import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;

      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
  const renderedOptions = options.map((option) => {
    if (selected.value === option.value) return;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">Select a champion</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
