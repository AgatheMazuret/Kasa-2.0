type HostProps = {
  // Définition des propriétés attendues pour le composant Host
  host: {
    name: string; // Nom de l'hôte
    picture: string; // URL de l'image de l'hôte
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
          className="w-full lg:w-full lg:h-full object-cover rounded-full" // Styles pour rendre l'image ronde et responsive
          src={host.picture} // L'image de l'hôte
          alt={`Picture of ${host.name}`} // Description alternative de l'image
        />
      </div>

      {/* Section affichant le nom de l'hôte */}
      <div className="flex items-center ">
        <p className="text-base text-[#ff6060] lg:text-lg  font-medium  lg:mr-4">
          {host.name} {/* Nom de l'hôte */}
        </p>
      </div>
    </div>
  );
}

export default Host; // Exportation du composant Host pour l'utiliser ailleurs
