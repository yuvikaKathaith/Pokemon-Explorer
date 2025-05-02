import { useFavorites } from "../contexts/favouriteContext";
import PokemonCard from "./PokemonCard";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Your Favorite Pokémon</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
