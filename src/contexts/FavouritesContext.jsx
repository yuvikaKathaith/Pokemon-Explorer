import { createContext, useContext, useEffect, useState } from "react";

const FavouritesContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (pokemon) => {
    setFavourites((prev) => {
      const exists = prev.find((fav) => fav.id === pokemon.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== pokemon.id);
      } else {
        return [...prev, pokemon];
      }
    });
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
