type RatingProps = {
  rating: string;
};
const starFull = "/star-full.png";
const starEmpty = "/star-empty.png";

function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center w-full h-[95px] lg:justify-end">
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src={index < Number(rating) ? starFull : starEmpty}
          alt="star"
        />
      ))}
    </div>
  );
}

export default Rating;
