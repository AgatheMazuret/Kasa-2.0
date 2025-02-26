import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

type DropdownProps = {
  description: string;
  equipments: string[];
};

type DropdownComponentProps = {
  title: string;
  content: React.ReactNode;
};

function DropdownComponent({ title, content }: DropdownComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      <div
        className="flex items-center justify-between px-4 py-2 bg-[#FF6060] text-white rounded-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && <div className="px-4 py-2 bg-white">{content}</div>}
    </div>
  );
}

function Dropdown({ description, equipments }: DropdownProps) {
  return (
    <div className="flex flex-col md:flex-row gap-20">
      <DropdownComponent
        title="Description"
        content={<div className="text-lg text-center">{description}</div>}
      />
      <DropdownComponent
        title="Equipments"
        content={
          <ul className="">
            {equipments.map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        }
      />
    </div>
  );
}

export default Dropdown;
