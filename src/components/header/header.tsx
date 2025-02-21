import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center w-full px-4 py-5 mb-[30px]">
      <div className="flex items-center">
        <img className="w-[145px] h-[47px]" src="/logo.svg" alt="Logo Kasa" />
      </div>
      <nav className="flex flex-col sm:flex-row gap-3 sm:gap-10">
        <NavLink
          to="/"
          className="text-black text-sm font-medium hover:underline lg:text-2xl"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className="text-black text-sm font-medium hover:underline lg:text-2xl"
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
