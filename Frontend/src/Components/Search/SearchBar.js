import React, { useState } from 'react';
import { useQuery }        from "react-query";
import debounce from 'lodash.debounce';

/**
 *
 * @param props
 * @param props.searchResults
 * @param props.setSearchResults
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchBar(props) {
  const [searchString, setSearchString] = useState('');

  async function handleChange( event ) {

    setSearchString(event.target.value);

    const query = debounce(async () => {
      const response = await fetch(`https://itunes.apple.com/search?parameterkeyvalue&term=${searchString}`);
      props.setSearchResults(await response.json());
    }, 30)

    query();
  }

  return (
    <>
      <input
        className="form-control p-2"
        type="text"
        placeholder={"Search albums, tracks or artists"}
        value={searchString}
        onChange={handleChange}
      />
      {JSON.stringify(props.searchResults)}

    </>
  )

}