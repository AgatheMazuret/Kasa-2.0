import { Link } from "react-router-dom";
import "../error/error.css";

function Error() {
  return (
    <main className="textError">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>

      <Link to="/" className="accueil">
        Retourner sur la page d&#39;accueil
      </Link>

      <Link to="/error" className="card-link">
        {" "}
      </Link>
    </main>
  );
}

export default Error;
