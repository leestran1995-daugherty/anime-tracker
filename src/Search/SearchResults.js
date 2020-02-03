import React from "react";
import SearchCard from "./SearchCard";

const SearchResults = ({ results }) => {
  return (
    <ul>
      {results.data && results.data.map(result => <SearchCard data={result} />)}
    </ul>
  )
};

export default SearchResults;
