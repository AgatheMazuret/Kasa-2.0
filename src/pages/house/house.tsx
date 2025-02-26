import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Dropdown from "../../components/dropdown/dropdown";
import Logements from "../../data/logements.json";
import Carousel from "../../components/carousel/carousel";
import Host from "../../components/host/host";
import Tag from "../../components/tags/tags";
import Rating from "../../components/rating/rating";

function House() {
  const { id } = useParams<{ id: string }>();
  const logement = Logements.find((house) => house.id === id);

  if (!logement) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-2xl font-bold text-[#ff6060] mb-4">
          Logement non trouvé!
        </h1>
        <Link to="/" className="text-blue-500 hover:underline text-lg">
          Retour à la page d'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carousel */}
      <Carousel images={logement.pictures} />

      {/* Content */}
      <div className="flex flex-col gap-5 w-full px-4 md:flex-row md:w-[1240px] md:mb-7">
        {/* Title and Location */}
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-2xl font-medium text-[#ff6060] mb-1 md:text-3xl">
            {logement.title}
          </h1>
          <p className="text-sm w-full md:text-base">{logement.location}</p>

          {/* Tags */}
          <div className="w-full mt-2">
            <Tag tag={logement.tags} />
          </div>
        </div>

        {/* Host and Rating */}
        <div className="flex flex-row-reverse lg:flex-col w-full lg:w-1/2 items-center">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </div>

      {/* Dropdown */}
      <div className="w-full px-4 md:w-[1240px]">
        <Dropdown
          equipments={logement.equipments}
          description={logement.description}
        />
      </div>
    </div>
  );
}

export default House;
