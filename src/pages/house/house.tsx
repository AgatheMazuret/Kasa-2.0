import { Link } from "react-router-dom";
import "../house/house.css";
import { useParams } from "react-router-dom";

function House(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="card">
      {/* Utilise `Link` pour rediriger vers la page spécifique de la maison */}
      <Link to={`/house/${id}`} className="card-link">
        <img src={cover} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default House;
