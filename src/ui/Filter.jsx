import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Filter({ title }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  function handleSearch() {
    // Implement search logic here
    console.log("Searching for:", searchTerm);
  }

  return (
    <div className="filter">
      <h3>{title}</h3>
      <div className="filter-options">
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
        <div className="">
          <FilterAltOutlinedIcon className="filter-icon" />
        </div>
      </div>
    </div>
  );
}
