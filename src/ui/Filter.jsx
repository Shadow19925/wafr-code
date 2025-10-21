import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useContext, createContext } from "react";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
const FilterContext = createContext();

export default function Filter({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const value = {
    searchTerm,
    setSearchTerm,
    isSearchFocused,
    setIsSearchFocused,
  };

  return (
    <FilterContext.Provider value={value}>
      <div className="filter">{children}</div>
    </FilterContext.Provider>
  );
}

// Compound subcomponents

Filter.Title = function Title({ children }) {
  return <h3 className="filter-title">{children}</h3>;
};

Filter.SearchBar = function SearchBar({ onSearch }) {
  const { searchTerm, setSearchTerm, isSearchFocused, setIsSearchFocused } =
    useContext(FilterContext);

  function handleSearch() {
    if (onSearch) onSearch(searchTerm);
  }

  return (
    <div className="search-bar">
      {!isSearchFocused && (
        <SearchIcon
          onClick={() => setIsSearchFocused(true)}
          className="search-icon"
        />
      )}
      {isSearchFocused && (
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
    </div>
  );
};

Filter.Icon = function Icon() {
  return <FilterAltOutlinedIcon className="filter-icon" />;
};

Filter.Options = function Options({ children }) {
  return <div className="filter-options">{children}</div>;
};

Filter.Sort = function Sort({ onSort, render }) {
  const [openSortOptions, setOpenSortOptions] = useState(false);

  function handleSort() {
    setOpenSortOptions(!openSortOptions);
    if (onSort) onSort();
  }
  return (
    <>
      <FilterListRoundedIcon className="sort-icon" onClick={handleSort} />
      {openSortOptions && (
        <div className="options-dropdown">
          {/* Sort options can be added here */}

          {render ? (
            render()
          ) : (
            <ul onClick={handleSort}>
              <li>Sort Options Here</li>
              <li>
                <button onClick={handleSort}>Close</button>
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
};
