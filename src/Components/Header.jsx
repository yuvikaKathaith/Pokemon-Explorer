import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center p-4 gap-3 sm:p-6 md:p-8">
      <img
        src="/src/assets/pokeApiLogo.png"
        alt="logo"
        className="w-40 sm:w-64 md:w-72 lg:w-80 h-auto"
      />
      <h1 className="text-xl sm:text-2xl md:text-3xl font-pixel text-center">
        Poke-Explorer
      </h1>
    </header>
  );
};

export default Header;
