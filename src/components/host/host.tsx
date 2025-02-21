type HostProps = {
  host: {
    name: string;
    picture: string;
  };
};

function Host({ host }: HostProps) {
  if (!host || !host.name || !host.picture) {
    return (
      <div className="text-red-500 text-center">
        Host information is missing.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5 lg:flex-row-reverse lg:items-center lg:justify-start lg:mb-5 w-full">
      {/* Image de l'hôte */}
      <div className="flex items-center justify-center">
        <img
          className="w-1/2 lg:w-full lg:h-full object-cover rounded-full"
          src={host.picture}
          alt={`Picture of ${host.name}`}
        />
      </div>

      {/* Nom de l'hôte */}
      <div className="flex items-center">
        <p className="text-base lg:text-lg font-medium text-[#ff6060] lg:mr-4">
          {host.name}
        </p>
      </div>
    </div>
  );
}

export default Host;
