import "../host/host.css";

// Définir le type des props
type HostProps = {
  host: {
    name: string;
    picture: string;
  };
};

function Host({ host }: HostProps) {
  if (!host || !host.name || !host.picture) {
    return <div className="hostError">Host information is missing.</div>;
  }

  return (
    <div className="hostNamePicture">
      <div className="hostPicture">
        <img src={host.picture} alt={`Picture of ${host.name}`} />
      </div>
      <div className="hostName">
        <p>{host.name}</p>
      </div>
    </div>
  );
}

export default Host;
