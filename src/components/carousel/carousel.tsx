import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type CarouselProps = { images: string[] };

function Carousel({ images }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative flex justify-center items-center w-[1240px] h-[415px] mb-5 max-w-full">
      {/* Chevron gauche */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 text-4xl text-white z-10 cursor-pointer left-5"
        onClick={prevImage}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Image du carousel */}
      <img
        src={images[currentImage]}
        alt="carousel"
        className="w-[1240px] h-[415px] object-cover"
      />

      {/* Chevron droit */}
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
