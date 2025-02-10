import "./card.css";
import React from "react";
import logements from "../../data/logements.json";

// Typage des propriétés pour le composant Card
type CardProps = {
  id: string;
  cover: string;
  title: string;
};

// Composant Card qui affiche une carte et redirige vers une autre page
function Card({ id, cover, title }: CardProps) {
  const handleClick = () => {
    // Ouvre un nouvel onglet pour la route house/:id
    window.open(`/house/${id}`, "_blank");
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

// Composant Gallery qui affiche une liste de cartes
function Gallery() {
  return (
    <section className="gallery">
      <div className="card-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </section>
  );
}

// Exporter Gallery comme composant par défaut
export default Gallery;
