import React from "react";

const SearchInput = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Rechercher..." className="search-input" />
      <button type="button" className="search-button">
        <i className="fas fa-search"></i>
      </button>
      <div className="user-info">
        <p>Issa Dia</p>
        <p>Développeur Front-end</p>
      </div>
    </div>
  );
};

export default SearchInput;
