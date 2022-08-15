import React, { useRef } from "react";

const Search = () => {
  const searchValue = useRef();
  return (
    <div class="container-fluid">
      <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search Cocktail"
          aria-label="Search"
          aria-describedby="search-addon"
          ref={searchValue}
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </form>
    </div>
  );
};

export default Search;
