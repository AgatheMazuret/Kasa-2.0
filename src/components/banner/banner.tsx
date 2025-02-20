const Banner = () => {
  return (
    <div className="w-full px-5 mb-5">
      <div
        className="flex w-full h-[223px] rounded-[10px] bg-black/40 bg-blend-darken bg-cover bg-center"
        style={{ backgroundImage: 'url("/photo-accueil.png")' }}
      >
        <p className="text-white text-[24px] sm:text-[48px] m-auto">
          Chez vous, partout et ailleurs
        </p>
      </div>
    </div>
  );
};

export default Banner;
