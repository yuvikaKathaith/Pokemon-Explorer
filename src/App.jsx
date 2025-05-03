import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import FilterbyType from "./Components/FilterbyType";
import PokemonList from "./Components/PokemonList";
import SortOptions from "./Components/SortOptions";
import PokemonDetail from './Components/PokemonDetail';
import FavouritesPage from './Components/FavouritesPage';

function App() {
  const [sortOption, setSortOption] = useState("id");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <SearchBar />
            <div className="flex flex-row justify-center items-center">
              <FilterbyType />
              <SortOptions 
                sortOption={sortOption} 
                setSortOption={setSortOption} 
              />
            </div>
            <PokemonList
              sortOption={sortOption}
            />
          </>
        } />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </>
  );
}

export default App;