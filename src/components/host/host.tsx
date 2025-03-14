type HostProps = {
  host: {
    name: string;
    picture: string;
  };
};

function Host({ host }: HostProps) {
  // Vérification que les informations de l'hôte sont valides
  if (!host || !host.name || !host.picture) {
    return (
      <div className="text-red-500 text-center">
        Host information is missing.{" "}
        {/* Message d'erreur si les informations sont manquantes */}
      </div>
    );
  }

  return (
    <div className="flex flex-row-reverse gap-4 lg:flex-row-reverse lg:items-center lg:justify-start lg:mb-5 w-full">
      {/* Section contenant l'image de l'hôte */}
      <div className="flex items-center justify-center p-0">
        <img
          className="w-full lg:w-full lg:h-full object-cover rounded-full"
          src={host.picture}
          alt={`Picture of ${host.name}`}
        />
      </div>

      {/* Section affichant le nom de l'hôte */}
      <div className="flex items-center ">
        <p className="text-base text-[#ff6060] lg:text-lg  font-medium  lg:mr-4">
          {host.name}
        </p>
      </div>
    </div>
  );
}

export default Host;
