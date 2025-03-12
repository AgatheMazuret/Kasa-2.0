import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

// Définition des types des props
type DropdownProps = {
  description: string;
  equipments: string[];
};

// Composant principal qui gère les dropdowns
// Ce composant affichera deux dropdowns
export function Dropdown({ description, equipments }: DropdownProps) {
  // États pour dire qu'initialement les 2 sont fermés
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    description: false,
    equipments: false,
  });

  // Fonction pour basculer l'état d'une section spécifique
  const toggleSection = (section: "description" | "equipments") => {
    // Inverse la valeur actuelle de la section choisie
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="flex flex-col pt-[20px] md:flex-row gap-20">
      {[
        {
          title: "Description",
          content: <p className="text-lg text-center">{description}</p>,
          key: "description",
        },
        {
          title: "Equipments",
          content: (
            <ul>
              {/* Parcourt chaque élément du tableau et retourne un nouvel élément pour chaque valeur. */}
              {equipments.map((item) => (
                <li key={item} className="text-lg">
                  {item}
                </li>
              ))}
            </ul>
          ),
          key: "equipments",
        },
        // Boucle sur le tableau ci dessus
      ].map(({ title, content, key }) => (
        <div key={key} className="flex flex-col flex-1">
          <div
            className="flex items-center justify-between px-4 py-2 bg-[#FF6060] text-white rounded-lg cursor-pointer"
            onClick={() => toggleSection(key as "description" | "equipments")}
          >
            <span>{title}</span>
            <FontAwesomeIcon
              icon={faChevronUp}
              // rotate de 180 si le section est ouverte sinon ne fait rien
              className={`transition-transform ${
                openSections[key] ? "rotate-180" : ""
              }`}
            />
          </div>
          {openSections[key] && (
            <div className="px-4 py-2 bg-white">{content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
