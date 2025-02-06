import React from "react";
import "./header.css";

const Nav = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.svg" alt="Logo Kasa" />

        <div className="nav">
          <a>Accueil</a>
          <a> A Propos</a>
        </div>
      </div>
      <div className="img-home">
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};

export default Nav;
