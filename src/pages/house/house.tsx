import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../house/house.css";
import Carousel from "../../components/carousel/carousel";

function House() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="card">
      {/* Utilise `Link` pour rediriger vers la page spécifique de la maison */}
      <Link to={`/house/${id}`} className="card-link"></Link>
      {/* <Carousel /> */}
    </div>
  );
}

export default House;
