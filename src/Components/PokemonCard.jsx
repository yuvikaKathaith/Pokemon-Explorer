import React from 'react';

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="bg-gray-100 rounded-xl shadow p-4 text-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <div className="bg-gray-200 rounded-lg h-32 sm:h-36 md:h-40 flex items-center justify-center mb-2 relative overflow-hidden">
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="h-24 w-24 object-contain pixelated transition-transform transform duration-300 hover:scale-125"
                />
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-1 px-2">
                <span>#{String(pokemon.id).padStart(3, '0')}</span>
                <span>EXP: {pokemon.base_experience}</span>
            </div>

            <h2 className="font-pixelify text-md capitalize">{pokemon.name}</h2>

            <div className="flex justify-center gap-2 mt-1 flex-wrap px-2">
                {pokemon.types.map((type) => (
                    <span
                        key={type}
                        className="bg-black text-white rounded-full px-2 py-1 text-xs sm:text-sm font-bold"
                    >
                        {type}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;
