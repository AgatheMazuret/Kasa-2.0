import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="flex justify-between items-center w-full p-5 sm:p-8 text-lg">
      <div className="flex items-center w-full mt-5 mb-12">
        <img className="w-[145px] h-[47px]" src="/logo.svg" alt="Logo Kasa" />
      </div>
      <nav className="flex gap-5 sm:gap-10">
        <NavLink
          to="/"
          className="text-black text-sm sm:text-lg font-medium hover:underline"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className="text-black text-sm sm:text-lg font-medium hover:underline"
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
