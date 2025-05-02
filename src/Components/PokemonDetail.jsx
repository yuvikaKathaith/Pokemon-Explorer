import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(res.data);
      } catch (err) {
        setError('Failed to fetch Pokémon data');
      }
    };
    fetchPokemon();
  }, [id]);

  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!pokemon) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 mb-10 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          className="w-48 h-48 object-contain"
        />
        <div>
          <h2 className="text-4xl font-bold capitalize mb-2">{pokemon.name}</h2>
          <div className="mb-4">
            <p><span className="font-semibold">Height:</span> {pokemon.height}</p>
            <p><span className="font-semibold">Weight:</span> {pokemon.weight}</p>
            <p><span className="font-semibold">Base Experience:</span> {pokemon.base_experience}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-1">Types</h3>
            <div className="flex gap-2 flex-wrap">
              {pokemon.types.map((typeObj, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm capitalize"
                >
                  {typeObj.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          {pokemon.stats.map((stat, index) => (
            <div key={index} className="flex justify-between">
              <span className="capitalize">{stat.stat.name}</span>
              <span>{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Abilities</h3>
        <ul className="list-disc list-inside">
          {pokemon.abilities.map((ab, index) => (
            <li key={index} className="capitalize">{ab.ability.name}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Moves</h3>
        <p className="text-gray-700">
          {pokemon.moves.slice(0, 10).map((move) => move.move.name).join(', ')}...
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
