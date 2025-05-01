import React from 'react';
import { getTypeColour } from '../utils/pokemonTypeColour';
import { pokemonTypes } from '../utils/pokemonTypes';

const FilterbyType = ({ setSelectedType }) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-6 gap-4">
      <span className="font-bold text-2xl sm:text-3xl font-mono text-center">Filter by type:</span>
      
      <div className="flex gap-2 flex-wrap justify-center items-center">
        {pokemonTypes.map((type) => (
          <button
            key={type}
            className={`${getTypeColour(type)} text-white px-4 py-1 rounded-xl text-sm capitalize`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}

        <button
          className="bg-black text-white px-4 py-1 rounded-full text-sm"
          onClick={() => setSelectedType('')}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterbyType;
