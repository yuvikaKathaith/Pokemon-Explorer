import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="bg-[#353030] max-w-9xl h-[150px] my-2 mx-30 flex justify-center items-center flex-col gap-2">
      <input
        type="text"
        placeholder="Search Pokémon"
        className="font-pixel border-2 border-white bg-white max-w-xl p-3 max-h-lg rounded-lg ring-blue-400"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <h1 className="font-pixel text-left text-white text-[11px] max-w-[250px] ml-7">
        Use this input to search for any Pokémon. In an instant.
      </h1>
    </div>
  );
};

export default SearchBar;
