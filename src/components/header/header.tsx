import { NavLink } from "react-router-dom";
import "./header.css";

const Nav = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.svg" alt="Logo Kasa" />

        <div className="nav">
          <NavLink to="/home">Accueil</NavLink>
          <NavLink to="/a-propos">A propos</NavLink>
        </div>
      </div>
      <div className="img-home">
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};

export default Nav;
