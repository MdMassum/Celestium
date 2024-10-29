import React, { useState } from 'react';
import searchIcon from '../../assets/AstrologersPage/searchIcon.png';

const SearchFeature: React.FC = () => {
  // State to toggle the search input visibility
  const [searchInput, setSearchInput] = useState<boolean>(false);

  // State to store the value of the search input
  const [inputValue, setInputValue] = useState<string>('');

  // Toggle searchInput state
  const handleClick = () => {
    if (!searchInput) {
      setSearchInput(true);
      return;
    } else {
      // api call for search feature
      console.log(inputValue);
    }
  };

  // Update inputValue state on change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex justify-between items-center w-full mx-auto -mt-2 text-xl md:text-base">

      {/* Render the title and search icon if search input is false */}
      {!searchInput && (
        <>
          <h1 className="text-[#FFD700] text-6xl from-neutral-300 font-robotoSerif w-full min-w-[300px] mb-6 tracking-wider">
            Astrologers
          </h1>
          <img src={searchIcon} alt="Search Icon" className="h-12 cursor-pointer" onClick={handleClick} />
        </>
      )}

      {/* Render the search input field when searchInput is true */}
      {searchInput && (
        <div className="flex justify-between items-center w-full bg-[#221936] gap-2 rounded-xl p-2 px-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="p-2 bg-[#221936] w-full outline-none"
            placeholder="Search here"
          />
          <img src={searchIcon} alt="Search Icon" className="h-8 cursor-pointer" onClick={handleClick} />
        </div>
      )}
    </div>
  );
};

export default SearchFeature;
