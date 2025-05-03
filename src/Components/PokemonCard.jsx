import React from "react";
import { getTypeColour } from "../utils/pokemonTypeColour";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    
      <div className="flex flex-col py-5 mx-auto rounded-md gap-5 flex-wrap w-[250px] sm:w-[250px] md:w-[250px]">
        {/* Image */}
        <Link to={`/pokemon/${pokemon.id}`}>
          <div className="flex items-center justify-center bg-[#d1d1da] w-full h-[200px] rounded-lg overflow-hidden">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="w-[150px] h-[150px] transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </Link>

        {/* ID and EXP */}
        <div className="flex flex-row justify-between text-sm px-1">
          <h1>#00{pokemon.id}</h1>
          <h1>EXP: {pokemon.base_experience}</h1>
        </div>

        {/* Name */}
        <div className="flex flex-row justify-between">
          <Link to={`/pokemon/${pokemon.id}`}>
            <div className="text-center sm:text-left px-1">
              <h1 className="font-semibold capitalize text-2xl">
                {pokemon.name}
              </h1>
            </div>
          </Link>
        </div>
        {/* Types */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 px-1">
          {pokemon.types.map((currType) => (
            <div
              key={currType.slot}
              className={`capitalize rounded-3xl px-3 py-1 text-sm text-white text-center ${getTypeColour(
                currType.type.name
              )}`}
            >
              {currType.type.name}
            </div>
          ))}
        </div>

        {/* Height & Weight */}
        <div className="text-left text-sm text-gray-700 px-1">
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      </div>
  );
};

export default PokemonCard;
