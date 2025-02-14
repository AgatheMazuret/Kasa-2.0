import "../rating/rating.css";

type RatingProps = {
  rating: number;
};

function Rating({ rating }: RatingProps) {
  const starFull = "/star-full.png";
  const starEmpty = "/star-empty.png";
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src={index < rating ? starFull : starEmpty}
          alt="star"
        />
      ))}
    </div>
  );
}

export default Rating;
