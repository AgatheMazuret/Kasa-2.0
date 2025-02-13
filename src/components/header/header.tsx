import { NavLink } from "react-router-dom";
import "./header";

const Nav = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.svg" alt="Logo Kasa" />

        <div className="nav">
          <NavLink to="/">
            <div>Accueil</div>
          </NavLink>
          <NavLink to="/a-propos">
            <div>A propos</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
