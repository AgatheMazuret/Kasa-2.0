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
    <Link
      to={`/house/${id}`}
      className="relative w-[85%] h-[200px] cursor-pointer sm:w-[22%] sm:h-[340px] sm:my-2"
    >
      <img
        src={cover}
        alt={title}
        className="w-full h-full rounded-[25px] object-cover"
      />
      <h3 className="absolute text-white text-[18px] bottom-[10px] left-[10px] p-1 m-0">
        {title}
      </h3>
    </Link>
  );
}

// Composant Gallery qui affiche une liste de cartes
function Gallery() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-[40px] p-[55px_0] w-[95%] bg-white rounded-[25px] md:flex-row md:flex-wrap md:justify-center md:mx-[60px] md:mb-[60px] md:bg-[#f6f6f6]">
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
