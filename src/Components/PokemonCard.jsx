import React from "react";
import { getTypeColour } from "../utils/pokemonTypeColour";
import { Link } from "react-router-dom";
import { useFavourites } from "../contexts/FavouritesContext";

const PokemonCard = ({ pokemon }) => {
  const { favourites, toggleFavourite } = useFavourites();
  const fav = favourites.some((fav) => fav.id === pokemon.id);

  return (
    <div className="relative flex flex-col py-5 mx-auto rounded-md gap-5 w-[250px]">
      {/* Image + Link */}
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
      <div className="flex justify-between text-sm px-1">
        <h1>#00{pokemon.id}</h1>
        <h1>EXP: {pokemon.base_experience}</h1>
      </div>

      {/* Name and Heart (separate from Link) */}
      <div className="flex justify-between items-center px-1">
        <Link to={`/pokemon/${pokemon.id}`} className="flex-1">
          <h1 className="font-semibold capitalize text-2xl">{pokemon.name}</h1>
        </Link>
        <div className="p-4 relative">
          {/* Pokémon content here */}
          <button
            onClick={() => toggleFavourite(pokemon)}
            className="absolute top-2 right-2 text-red-500 text-xl"
          >
            {fav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>

      {/* Types */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-2 px-1">
        {pokemon.types.map((currType) => (
          <div
            key={currType.slot}
            className={`capitalize rounded-3xl px-3 py-1 text-sm text-white ${getTypeColour(
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
