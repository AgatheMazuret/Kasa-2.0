import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="text-center">
      <h1 className="flex items-center justify-center text-6xl text-red-400 my-16 lg:text-[288px] md:my-36">
        404
      </h1>
      <h2 className="flex items-center justify-center text-m mb-[60] text-red-400 md:text-xl">
        Oups! La page que vous demandez n'existe pas.
      </h2>

      <Link
        to="/"
        className="flex items-center justify-center mt-16 mb-16 text-black text-base underline underline-offset-2 md:text-lg md:mt-36 md:mb-36"
      >
        Retourner sur la page d&#39;accueil
      </Link>

      <Link to="/error" className="card-link">
        {" "}
      </Link>
    </main>
  );
}

export default Error;
