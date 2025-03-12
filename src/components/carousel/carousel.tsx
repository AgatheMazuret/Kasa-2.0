import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type CarouselProps = { images: string[] };

function Carousel({ images }: CarouselProps) {
  // État pour suivre l'index de l'image actuellement affichée
  const [currentImage, setCurrentImage] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour revenir à l'image précédente
  const prevImage = () => {
    setCurrentImage(
      // Décrémente l'index et boucle à la dernière image si nécessaire.
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative flex justify-center items-center w-[1240px] h-[415px] mb-5 max-w-full">
      {/* Bouton pour aller à l'image précédente */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 text-4xl text-white z-10 cursor-pointer left-5"
        onClick={prevImage}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Affichage de l'image actuelle */}
      <img
        src={images[currentImage]}
        alt="carousel"
        className=" object-cover w-auto h-[255px] lg:w-[1240px] lg:h-[415px]"
      />

      {/* Bouton pour aller à l'image suivante */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 text-4xl text-white z-10 cursor-pointer right-5"
        onClick={nextImage}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Carousel;
