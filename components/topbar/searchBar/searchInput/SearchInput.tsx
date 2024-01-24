import React from "react";

const SearchInput = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Rechercher..."
        className="rounded-md w-5/6 px-4 py-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />
      {/* <button type="button" className="search-button">
        <i className="fas fa-search"></i>
      </button>
      <div className="user-info">
        <p>Issa Dia</p>
        <p>Développeur Front-end</p>
      </div> */}
    </div>
  );
};

export default SearchInput;
