import React from "react";

const Search = ({ onSearch, onSubmitSearch }) => {
  return (
    <>
      <input onChange={(e) => onSearch(e.target.value)} />
      <button onClick={onSubmitSearch}>Search</button>
    </>
  );
};

export default Search;
