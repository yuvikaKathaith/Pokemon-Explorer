import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center p-4 gap-4 sm:p-6 md:p-8 relative">
      <img
        src="/pokeApiLogo.png"
        alt="logo"
        className="w-40 sm:w-64 md:w-72 lg:w-80 h-auto"
      />
      <h1 className="text-xl sm:text-2xl md:text-3xl font-pixel text-center">
        Poke-Explorer
      </h1>

      <Link
        to="/favourites"
        className="mt-2 bg-black text-white px-5 py-2 rounded-full text-sm sm:text-base hover:bg-blue-700 transition duration-300 shadow-md"
      >
        ❤️ View Favourites
      </Link>
    </header>
  );
};

export default Header;
