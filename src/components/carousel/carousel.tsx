import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./carousel.css";

type CarouselProps = { images: string[] };

function Carousel({ images }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Fonction pour avancer l'image
  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour reculer l'image
  const prevImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carouselContainer">
      {/* Chevron gauche avec Font Awesome */}
      <a className="carousel-chevron-left" onClick={prevImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </a>

      {/* Image du carousel */}

      <img
        src={images[currentImage]}
        alt="carousel"
        className="carouselImage"
      />

      {/* Chevron droit avec Font Awesome */}
      <a className="carousel-chevron-right" onClick={nextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </a>
    </div>
  );
}

export default Carousel;
