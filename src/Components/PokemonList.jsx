import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { PacmanLoader } from "react-spinners";
import Pagination from "./Pagination";

const PokemonList = ({ searchTerm, selectedTypes, sortOption }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // fetch pokemons
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_POKE_API_URL;
        const data = await axios.get(apiUrl);

        const detailedPokemonResponse = data.data.results.map(
          async (pokemon) => {
            const response = await axios.get(pokemon.url);
            return response;
          }
        );

        const detailedPokemonData = await Promise.all(detailedPokemonResponse);
        setLoading(false);
        setPokemonData(detailedPokemonData);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    };
    fetchPokemonData();
  }, []);

  // loading
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <PacmanLoader color="#FFCB05" size={24} />
      </div>
    );
  }
  // error
  if (error) {
    return (
      <h1 className="flex justify-center items-center py-20">
        {error.message}
      </h1>
    );
  }

  // filter pokemons by search & multiple types
  const filteredPokemons = pokemonData.filter((poke) => {
    const searchFilter = poke.data.name.toLowerCase().includes(searchTerm.toLowerCase());
    const typeFilter = selectedTypes.length === 0 || selectedTypes.every((selectedType) => (
      poke.data.types.some((type) => type.type.name === selectedType)
    ))

    return searchFilter && typeFilter;
  });

  //sorting
  const sortedPokemons = [...filteredPokemons].sort((a, b) => {
    if (sortOption === "aToz") {
      return a.data.name.localeCompare(b.data.name);
    } else if (sortOption === "zToa") {
      return b.data.name.localeCompare(a.data.name);
    } else {
      return a.data.id - b.data.id; 
    }
  });

  // pagination logic
  const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);
  const lastPostIndex = itemsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const paginatedPokemons = sortedPokemons.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="flex flex-col justify-center items-center h-full min-h-[40vh] px-4">
      {paginatedPokemons.length === 0 ? (
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 text-center -mt-20">
          No Pokémon found!
        </h2>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 py-5">
            {paginatedPokemons.map((pokemon) => (
              <PokemonCard key={pokemon.data.id} pokemon={pokemon.data} />
            ))}
          </div>
          <div className="py-5">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              itemsPerPage={itemsPerPage}
              setCurrentPage={setCurrentPage}
              setItemsPerPage={setItemsPerPage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
