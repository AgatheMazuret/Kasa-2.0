import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./dropdown.css";

type DropdownProps = {
  description: string;
  equipments: string[];
};

function Dropdown({ description, equipments }: DropdownProps) {
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

  const toggleDescription = () => setDescriptionOpen((prev) => !prev);
  const toggleEquipments = () => setEquipmentsOpen((prev) => !prev);

  return (
    <div className="dropdownContainer">
      {/* Section: Description */}
      <div className={`dropdown ${isDescriptionOpen ? "active" : ""}`}>
        <div
          className="dropdownHeader"
          onClick={toggleDescription}
          role="button"
          aria-expanded={isDescriptionOpen}
          aria-controls="descriptionContent"
          tabIndex={0}
        >
          <span className="downArrow">Description</span>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
        {isDescriptionOpen && (
          <div id="descriptionContent" className="text">
            {description}
          </div>
        )}
      </div>

      {/* Section: Equipments */}
      <div className={`dropdown `}>
        <div
          className="dropdownHeader"
          onClick={toggleEquipments}
          role="button"
          aria-expanded={isEquipmentsOpen}
          aria-controls="equipmentsContent"
          tabIndex={0}
        >
          <span className="downArrow">Equipments</span>
          <FontAwesomeIcon
            className={`transition ${
              isEquipmentsOpen ? "rotate-180" : "rotate-0"
            }`}
            icon={faChevronUp}
          />
        </div>
        {isEquipmentsOpen && equipments.length > 0 && (
          <div id="equipmentsContent">
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
