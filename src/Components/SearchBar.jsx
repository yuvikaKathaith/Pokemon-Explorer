const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-[#353030] w-full h-auto py-6 px-4 sm:px-10 md:px-20 lg:px-20 flex flex-col justify-center items-center gap-3">
      <input
        type="text"
        placeholder="Search Pokémon"
        className="font-pixel border-2 border-white bg-white w-full max-w-md p-3 rounded-lg ring-blue-400"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <h1 className="font-pixel text-white text-xs sm:text-sm text-center sm:text-left max-w-xs">
        Use this input to search for any Pokémon. In an instant.
      </h1>
    </div>
  );
};

export default SearchBar;
