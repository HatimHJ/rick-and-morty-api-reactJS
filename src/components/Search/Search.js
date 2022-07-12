import React, { useState } from "react";
import { useGlobalContext } from "../../context";

const Search = ({ setSearch }) => {
  const { setPageNumber } = useGlobalContext();
  const [searchText, setSearchText] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    setPageNumber(1);
    setSearch(searchText);
  };
  return (
    <form className="row g-3 " onSubmit={(e) => searchHandler(e)}>
      <div className="col-md-4 offset-md-4">
        <input
          type="text"
          id="search"
          autoComplete="off"
          className="form-control custom-shadow"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      </div>
      <div className="col-md-4">
        <button type="submit" className="btn btn-primary mb-3 custom-shadow">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
