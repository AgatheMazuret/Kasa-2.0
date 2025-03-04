import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

// Définition des types des props attendues pour le composant Dropdown
// description: texte décrivant un élément
// equipments: liste des équipements sous forme de tableau de chaînes de caractères
type DropdownProps = {
  description: string;
  equipments: string[];
};

// Définition des props attendues pour le composant DropdownComponent
// title: titre du dropdown
// children: contenu à afficher lorsque le dropdown est ouvert
type DropdownComponentProps = {
  title: string;
  children: React.ReactNode;
};

// Composant réutilisable pour afficher un dropdown
function DropdownComponent({ title, children }: DropdownComponentProps) {
  // État pour suivre si le dropdown est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      {/* En-tête du dropdown, cliquable pour ouvrir/fermer */}
      <div
        className="flex items-center justify-between px-4 py-2 bg-[#FF6060] text-white rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {/* Icône qui tourne lorsqu'on ouvre/ferme le dropdown */}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {/* Contenu affiché uniquement si isOpen est vrai */}
      {isOpen && <div className="px-4 py-2 bg-white">{children}</div>}
    </div>
  );
}

// Composant principal qui affiche deux dropdowns : un pour la description, un pour les équipements
function Dropdown({ description, equipments }: DropdownProps) {
  return (
    <div className="flex flex-col pt-[20px] md:flex-row gap-20">
      {/* Dropdown pour la description */}
      <DropdownComponent
        title="Description"
        children={<div className="text-lg text-center">{description}</div>}
      />
      {/* Dropdown pour la liste des équipements */}
      <DropdownComponent
        title="Equipments"
        children={
          <ul>
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
