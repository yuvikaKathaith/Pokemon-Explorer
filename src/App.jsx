import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import FilterbyType from "./Components/FilterbyType";
import PokemonList from "./Components/PokemonList";
import SortOptions from "./Components/SortOptions";
import PokemonDetail from './Components/PokemonDetail';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOption, setSortOption] = useState("id");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="flex flex-row justify-center items-center">
              <FilterbyType
                selectedTypes={selectedTypes}
                setSelectedTypes={setSelectedTypes}
              />
              <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
            </div>
            <PokemonList
              searchTerm={searchTerm}
              selectedTypes={selectedTypes}
              sortOption={sortOption}
            />
          </>
        } />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </>
  );
}

export default App;