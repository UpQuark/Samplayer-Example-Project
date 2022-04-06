import React     from 'react';
import SearchBar from "./SearchBar";

export default function Home() {
  return (
    <div className={"row pt-3"}>
      <div className={"col"}>
        <SearchBar/>
      </div>
    </div>
  )
}