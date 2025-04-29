import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import SearchBar from './SearchBar';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pokemonTypes = [
    'normal', 'grass', 'fire', 'water', 'bug', 'electric',
    'rock', 'ghost', 'poison', 'psychic', 'fighting', 'ground', 'dragon'
  ];

  const typeColor = (type) => {
    const colors = {
      normal: 'bg-gray-300 text-black',
      grass: 'bg-green-600',
      fire: 'bg-orange-500',
      water: 'bg-blue-600',
      bug: 'bg-green-700',
      electric: 'bg-yellow-400 text-black',
      rock: 'bg-yellow-700',
      ghost: 'bg-purple-700',
      poison: 'bg-purple-400',
      psychic: 'bg-pink-400',
      fighting: 'bg-orange-700',
      ground: 'bg-yellow-600',
      dragon: 'bg-red-500',
    };
    return colors[type] || 'bg-gray-400';
  };

  const fetchPokemonData = async () => {
    try {
      const promises = [];
      for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
      }
      const results = await Promise.all(promises);
      const pokemons = results.map((result) => ({
        id: result.id,
        name: result.name,
        image: result.sprites['front_default'],
        types: result.types.map((type) => type.type.name),
      }));
      setPokemonData(pokemons);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch Pokémon data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const filteredPokemon = pokemonData
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((pokemon) => {
      if (!selectedType) return true;
      return pokemon.types.includes(selectedType);
    });

  return (
    <div className="p-4">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* filter  */}
      <div className="flex flex-wrap gap-2 my-4 mx-30">
        {pokemonTypes.map((type) => (
          <button
            key={type}
            className={`px-4 py-1 rounded text-white capitalize ${
              selectedType === type ? 'bg-black' : typeColor(type)
            }`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
        <button
          onClick={() => setSelectedType('')}
          className="px-4 py-1 rounded bg-black text-white"
        >
          Reset
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredPokemon.length > 0 ? (
            filteredPokemon.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          ) : (
            <p>No Pokémon found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
