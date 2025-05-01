// App.jsx
import { useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import FilterbyType from "./Components/FilterbyType";
import PokemonList from "./Components/PokemonList";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  return (
    <>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterbyType setSelectedType={setSelectedType} />
      <PokemonList searchTerm={searchTerm} selectedType={selectedType} />
    </>
  );
}

export default App;
