import React, { useState } from "react";
import { useFavourites } from "../contexts/FavouritesContext";
import PokemonCard from "../Components/PokemonCard";
import Pagination from "./Pagination";

const FavouritesPage = () => {
  const { favourites } = useFavourites();
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(favourites.length / itemsPerPage);
  const lastPostIndex = itemsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const paginatedPokemons = favourites.slice(firstPostIndex, lastPostIndex);

  if (favourites.length === 0){
    return (
      <div className="text-center mt-10 text-lg text-gray-600">
        You haven’t added any favourites yet!
      </div>
    );
  }

  return (
    <div className="p-5 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">Your Favourites</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {paginatedPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} totalPages={totalPages}/>
    </div>
  );
};

export default FavouritesPage;
