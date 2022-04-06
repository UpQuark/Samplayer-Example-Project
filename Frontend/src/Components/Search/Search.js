import React, { useState } from 'react'
import SearchBar           from "./SearchBar";

export default function Search() {

  let [searchResults, setSearchResults] = useState({});

  return (
    <div className={"row my-3"}>
      <div className={"col"}>
        <SearchBar searchResults={searchResults} setSearchResults={setSearchResults}/>
      </div>
    </div>
  )
}