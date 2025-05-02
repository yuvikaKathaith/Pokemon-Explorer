import React from 'react';
import { getTypeColour } from '../utils/pokemonTypeColour';
import { pokemonTypes } from '../utils/pokemonTypes';

const FilterbyType = ({ selectedTypes, setSelectedTypes }) => {
  const toggleType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-start px-16 py-6 gap-4">
      <span className="font-bold text-2xl sm:text-3xl font-mono text-center px-8">Filter by type:</span>
      
      <div className="flex gap-2 flex-wrap justify-center items-start w-13/15 px-3">
        {pokemonTypes.map((type) => {
          const selectedIndex = selectedTypes.indexOf(type);

          return (
            <button
              key={type}
              className={`
                relative
                ${getTypeColour(type)} 
                text-white px-4 py-1 rounded-xl text-sm capitalize
                ${selectedIndex !== -1? "ring-4 ring-white" : ""}
              `}
              onClick={() => toggleType(type)}
            >
              {type}
              {selectedIndex !== -1 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full font-mono">
                  {selectedIndex + 1}
                </span>
              )}
            </button>
          );
        })}

        <button
          className="bg-black text-white px-4 py-1 rounded-full text-sm"
          onClick={() => setSelectedTypes([])}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterbyType;
