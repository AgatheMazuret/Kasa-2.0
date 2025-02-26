import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
  const [activeDropdowns, setActiveDropdowns] = useState([]);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdowns(
      (prev) =>
        prev.includes(dropdownName)
          ? prev.filter((name) => name !== dropdownName) // Supprime si déjà ouvert
          : [...prev, dropdownName] // Ajoute sinon
    );
  };

  const sections = [
    { name: "Fiabilité", content: "Contenu de Fiabilité" },
    { name: "Respect", content: "Contenu de Respect" },
    { name: "Service", content: "Contenu de Service" },
    { name: "Sécurité", content: "Contenu de Sécurité" },
  ];

  return (
    <>
      {/* Banner avec image de fond */}
      <div
        className="w-full h-[111px] mb-[19px] flex rounded-[10px] bg-black/40 bg-blend-darken bg-cover bg-center 
        lg:w-[90%] lg:h-[223px] lg:mt-0 lg:mr-[60px] lg:mb-[43px] lg:ml-[60px]"
        style={{ backgroundImage: 'url("/photo_a_propos.png")' }}
      ></div>

      <div className="flex flex-col gap-[30px] items-center justify-center">
        {sections.map((section) => (
          <div className="w-[70%]" key={section.name}>
            {/* Dropdown section */}
            <div
              className={`w-full px-[10px] py-[10px] border-b-[1px] border-[#e0e0e0] cursor-pointer 
              bg-[#ff6060] text-white rounded-[5px]`}
            >
              <div
                className="flex justify-between items-center w-full"
                onClick={() => toggleDropdown(section.name)}
                role="button"
                aria-expanded={activeDropdowns.includes(section.name)}
                aria-controls={`${section.name}Content`}
                tabIndex={0}
              >
                {/* Le nom du dropdown ne tourne pas */}
                <span>{section.name}</span>

                {/* Le chevron tourne uniquement */}
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className={`transition-transform duration-500 ease-in-out transform 
                  ${
                    activeDropdowns.includes(section.name) ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {/* Contenu affiché sous le dropdown */}
            {activeDropdowns.includes(section.name) && (
              <div className="text mt-[10px] w-full sm:w-[90%]">
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
