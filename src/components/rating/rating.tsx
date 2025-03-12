type RatingProps = {
  rating: string; // Propriété qui représente la note sous forme de chaîne de caractères
};

const starFull = "/star-full.png";
const starEmpty = "/star-empty.png";

function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center w-full h-[95px] lg:justify-end">
      {/* Génération des étoiles en fonction de la note */}
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src={index < Number(rating) ? starFull : starEmpty} // Choix de l'étoile pleine ou vide selon la note
          alt="star"
        />
      ))}
    </div>
  );
}

export default Rating;
