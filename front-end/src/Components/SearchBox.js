import React from "react";
import SearchBar from "material-ui-search-bar";

const SearchBox = () => {
  return (
    <SearchBar
      className="searchBox"
      placeholder="Search All Brands, Models & Parts"
      onChange={() => console.log("onChange")}
      onRequestSearch={() => console.log("onRequestSearch")}
      style={{
        margin: "0 auto",
        maxWidth: 800,
      }}
    />
  );
};

export default SearchBox;
