import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../house/house";
import Dropdown from "../../components/dropdown/dropdown";
import Logements from "../../data/logements.json";
import Carousel from "../../components/carousel/carousel";

function House() {
  const { id } = useParams<{ id: string }>();
  const logement = Logements.find((house) => house.id === id);

  if (!logement) {
    return <div>Logement non trouvé!</div>;
  }

  return (
    <div className="card">
      {/* Utilise `Link` pour rediriger vers la page spécifique de la maison */}
      <Link to={`/house/${id}`} className="card-link"></Link>
      <Carousel images={logement.pictures} />
      <Dropdown title={logement.title} content={logement.description} />
    </div>
  );
}

export default House;
