type RatingProps = {
  rating: number;
};

function Rating({ rating }: RatingProps) {
  const starFull = "/star-full.png";
  const starEmpty = "/star-empty.png";
  return (
    <div className="flex justify-end items-center w-full h-[95px] lg:m-0 lg:p-0">
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
