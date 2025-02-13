import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../house/house.css";
import Dropdown from "../../components/dropdown/dropdown";
import Logements from "../../data/logements.json";
import Carousel from "../../components/carousel/carousel";
import Host from "../../components/host/host";
import Tag from "../../components/tags/tags";

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
      <div className="content">
        <div className="nameLocation">
          <h1 className="nameLogement">{logement.title}</h1>
          <p className="location">{logement.location}</p>
        </div>
        <Host host={logement.host} />
        <Tag tag={logement.tags} />
      </div>
      <Dropdown
        equipments={logement.equipments}
        description={logement.description}
      />
    </div>
  );
}

export default House;
