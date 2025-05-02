const SortOptions = ({ sortOption, setSortOption }) => {
    return (
      <div className="flex justify-center py-4 px-22">
        <select
          className="border px-3 py-2 rounded bg-black text-white text-xl"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="id">Sort by ID</option>
          <option value="aToz">Sort by Name (A-Z)</option>
          <option value="zToa">Sort by Name (Z-A)</option>
        </select>
      </div>
    );
};

export default SortOptions