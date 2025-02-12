import React, { useState } from "react";
import "./carousel.css";
import Host from "../host/host";

// Crée un composant `Carousel` qui affiche les images de la maison

type CarouselProps = {
  pictures: string[];
  title: string;
};

function Carousel({ pictures, title }: CarouselProps) {
  return (
    <div className="carousel">
      {pictures.map((picture, index) => (
        <img key={index} src={picture} alt={title} />
      ))}
    </div>
  );
}

// importer les images de house

// Crée un tableau d'images pour le carousel

// Crée un composant `Carousel` qui affiche les images de la maison

// passer à l'image suivante et revenir à la première image

// passer à l'image précédente et revenir à la dernière image

//  Ajouter les flèches pour passer à l'image suivante ou précédente

// Exporter le composant Carousel
export default Carousel;
