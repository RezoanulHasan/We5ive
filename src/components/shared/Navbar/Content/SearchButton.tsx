import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div>
      {/* Search Input only on larger screens */}
      <div className="relative hidden sm:block">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto pr-10 pl-10"
        />
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FaSearch className="w-5 h-5" />
        </span>
      </div>

      {/* Search Icon and Input on smaller screens */}
      <div className="sm:hidden flex items-center relative">
        {!showSearch && (
          <button onClick={handleSearchToggle}>
            <FaSearch className="w-5 h-5 text-gray-700" />
          </button>
        )}
        {showSearch && (
          <div className="absolute top-0 left-0 w-full">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full  pr-10"
            />
            <span
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={handleSearchToggle}
            >
              <FaSearch className="w-10 h-5" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchButton;
