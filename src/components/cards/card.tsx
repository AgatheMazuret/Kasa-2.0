import { Link } from "react-router-dom";
import "./card.css";
import React from "react";
import logements from "../../data/logements.json";

// Définition du composant Card qui affiche une image et un titre
function Card({ cover, title }) {
  return (
    <div className="card">
      {/* Conteneur pour chaque carte */}
      <img src={cover} alt={title} />{" "}
      {/* Affiche l'image de couverture avec un texte alternatif basé sur le titre */}
      <h3>{title}</h3> {/* Affiche le titre de l'élément */}
    </div>
  );
}

// Définition du composant Gallery qui affiche une liste de cartes
export default function Gallery() {
  return (
    <section className="gallery">
      {/* Section contenant toutes les cartes */}
      <div className="card-container">
        {/* Conteneur pour toutes les cartes */}
        {logements.map((logement, index) => (
          <Card key={index} cover={logement.cover} title={logement.title} />
          // On passe directement la couverture et le titre à la carte
        ))}
      </div>
    </section>
  );
}
