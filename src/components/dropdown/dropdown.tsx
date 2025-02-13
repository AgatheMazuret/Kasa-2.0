import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; //

import "./dropdown";
type DropdownProps = {
  title: string;
  content: string;
};

function Dropdown({ title, content }: DropdownProps) {
  const [active, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div
      className={`dropdown ${active ? "active" : ""}`}
      onClick={handleToggle}
    >
      <div className="dropdownBlock">
        <div className="title">{title}</div>
        {active && <div className="text">{content}</div>}{" "}
        {/* Le contenu est affiché seulement si active est true */}
      </div>
      <span className="logoSection">
        <FontAwesomeIcon icon={faChevronDown} />
      </span>
    </div>
  );
}

export default Dropdown;
