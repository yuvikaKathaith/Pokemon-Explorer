import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard';
import { PacmanLoader } from 'react-spinners';

const PokemonList = ({ searchTerm, selectedType }) => {
  const [pokemonData, setPokemonData] = useState([]) 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // fetch pokemons
  const fetchPokemonData = async () => {
    try {
      const apiUrl = import.meta.env.VITE_POKE_API_URL;
      const data = await axios.get(apiUrl);

      const detailedPokemonResponse = data.data.results.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        return response;
      });

      const detailedPokemonData = await Promise.all(detailedPokemonResponse);
      setLoading(false)
      setPokemonData(detailedPokemonData);
    } catch (error) {
      setLoading(false)
      setError(true);
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPokemonData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <PacmanLoader color='#FFCB05' size={24} />
      </div>
    );
  }

  if (error) {
    return (
      <h1 className="flex justify-center items-center py-20">
        {error.message}
      </h1>
    );
  }

  // filter pokemons
  const filteredPokemons = pokemonData.filter((poke) => {
    const searchFilter = poke.data.name.toLowerCase().includes(searchTerm.toLowerCase());
    const typeFilter = selectedType === '' || poke.data.types.some(type => type.type.name === selectedType)
    return searchFilter && typeFilter
  })

  return (
    <div className='flex flex-col justify-center items-center h-full min-h-[40vh] px-4'>
      {filteredPokemons.length === 0 ? (
        <h2 className='text-2xl sm:text-3xl font-semibold text-gray-600 text-center mt-10'>
          No Pokémon found!
        </h2>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
          {filteredPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.data.id} pokemon={pokemon.data} />
          ))}
        </div>
      )}
      <div className='pb-10'>
        <button className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition duration-200'>
          See more
        </button>
      </div>
    </div>
  )
}

export default PokemonList
