import React, { useState } from 'react';

export default function SearchBar() {
  const [searchString, setSearchString] = useState('');

  function handleChange( event ) {
    setSearchString(event.target.value);
  }

  return (
    <>
      <input
        className="form-control p-2"
        type="text"
        placeholder={"Search albums, tracks or artists"}
        value={searchString}
        onChange={handleChange}/>
    </>
  )

}