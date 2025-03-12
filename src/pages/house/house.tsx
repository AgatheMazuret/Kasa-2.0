import { useParams } from "react-router-dom";
import Error from "../error/error";
import Dropdown from "../../components/dropdown/dropdown";
import Logements from "../../data/logements.json";
import Carousel from "../../components/carousel/carousel";
import Host from "../../components/host/host";
import Tag from "../../components/tags/tags";
import Rating from "../../components/rating/rating";

function House() {
  const { id } = useParams<{ id: string }>();
  const logement = Logements.find((house) => house.id === id);

  // Si aucun logement n'est trouvé, afficher le composant Error
  if (!logement) {
    return <Error />;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <Carousel images={logement.pictures} />
      <div className="flex flex-col gap-5 w-full px-4 md:flex-row md:w-[1240px] md:mb-7">
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-2xl font-medium text-[#ff6060] mb-1 md:text-3xl">
            {logement.title}
          </h1>
          <p className="text-sm w-full md:text-base">{logement.location}</p>
          <div className="w-full mt-2">
            <Tag tag={logement.tags} />
          </div>
        </div>
        <div className="flex flex-row-reverse lg:flex-col w-full lg:w-1/2 items-center">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="w-full px-4 md:w-[1240px]">
        <div className="flex flex-col pt-[20px] md:flex-row gap-20">
          {/* Dropdown pour la description */}
          <Dropdown title="Description">
            <div className="text-lg text-center">{logement.description}</div>
          </Dropdown>

          {/* Dropdown pour la liste des équipements */}
          <Dropdown title="Equipments">
            <ul>
              {logement.equipments.map((item) => (
                <li key={item} className="text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default House;
