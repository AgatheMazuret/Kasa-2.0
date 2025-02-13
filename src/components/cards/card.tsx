import "./card.css";
import logements from "../../data/logements.json";
import { Link } from "react-router-dom";

// Typage des propriétés pour le composant Card
type CardProps = {
  id: string;
  cover: string;
  title: string;
};

// Composant Card qui affiche une carte et redirige vers une autre page
function Card({ id, cover, title }: CardProps) {
  return (
    <Link to={`/house/${id}`} className="card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
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
