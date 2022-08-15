import { useState } from "react";
import "./Search.scss";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search">
      <input
        className="search-form"
        placeholder={"Search..."}
        value={searchValue}
        onChange={handleSearch}
      />
      <button className="search-button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z"
            stroke="#313037"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 20L16 16"
            stroke="#313037"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;