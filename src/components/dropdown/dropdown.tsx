import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

type DropdownProps = {
  description: string;
  equipments: string[];
};

function Dropdown({ description, equipments }: DropdownProps) {
  const [openSection, setOpenSection] = useState<
    "description" | "equipments" | null
  >(null);

  const toggleSection = (section: "description" | "equipments") => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="flex flex-col md:flex-row gap-20">
      {/* Description */}
      <div className="flex flex-col flex-1">
        {" "}
        {/* flex-1 pour prendre 50% */}
        <div
          className="flex items-center justify-between px-4 py-2 bg-[#FF6060] text-white rounded-lg cursor-pointer"
          onClick={() =>
            setOpenSection((prev) =>
              prev === "description" ? null : "description"
            )
          }
        >
          <span>Description</span>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`transition-transform ${
              openSection === "description" ? "rotate-180" : ""
            }`}
          />
        </div>
        {openSection === "description" && (
          <div className="px-4 py-2 text-lg text-center bg-white ">
            {description}
          </div>
        )}
      </div>

      {/* Equipments */}
      <div className="flex flex-col flex-1">
        {" "}
        {/* flex-1 pour prendre 50% */}
        <div
          className="flex items-center justify-between px-4 py-2 bg-[#FF6060] text-white rounded-lg cursor-pointer"
          onClick={() =>
            setOpenSection((prev) =>
              prev === "equipments" ? null : "equipments"
            )
          }
        >
          <span>Equipments</span>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`transition-transform ${
              openSection === "equipments" ? "rotate-180" : ""
            }`}
          />
        </div>
        {openSection === "equipments" && equipments.length > 0 && (
          <ul className="px-4 py-2 bg-white ">
            {equipments.map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
