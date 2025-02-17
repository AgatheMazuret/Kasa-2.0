import "../a-propos/apropos.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const sections = [
    { name: "Fiabilité", content: "Contenu de Fiabilité" },
    { name: "Respect", content: "Contenu de Respect" },
    { name: "Service", content: "Contenu de Service" },
    { name: "Sécurité", content: "Contenu de Sécurité" },
  ];

  return (
    <>
      <div className="bannerApropos"></div>
      <div className="dropdownContainerApropos">
        {sections.map((section) => (
          <div
            key={section.name}
            className={`dropdown ${
              activeDropdown === section.name ? "active" : ""
            }`}
          >
            <div
              className="dropdownApropos"
              onClick={() => toggleDropdown(section.name)}
              role="button"
              aria-expanded={activeDropdown === section.name}
              aria-controls={`${section.name}Content`}
              tabIndex={0}
            >
              <span className="downArrow">{section.name}</span>
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
            {activeDropdown === section.name && (
              <div id={`${section.name}Content`} className="text">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Dropdown;
