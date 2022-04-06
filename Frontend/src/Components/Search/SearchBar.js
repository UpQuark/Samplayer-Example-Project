import React, { useState } from 'react';
import { useQuery }        from "react-query";
import debounce            from 'lodash.debounce';

/**
 *
 * @param props
 * @param props.searchResults
 * @param props.setSearchResults
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchBar( props ) {
  const [searchString, setSearchString] = useState("");

  async function searchItunesApi( event ) {
    setSearchString(event.target.value);

    // Reset on absent search string, to prevent searching for nothing
    if ( event.target.value === "" ) {
      props.setSearchResults({})
      return;
    }

    const query = debounce(async () => {
      try {
        const response = await fetch(`https://itunes.apple.com/search?parameterkeyvalue&term=${searchString}`);
        props.setSearchResults(await response.json());
      } catch ( e ) {
        // In the real world, you may want to persist this to a telemetry service and handle 404s before it
        console.debug(JSON.stringify(e));
        props.setSearchResults({});
      }

    }, 100)
    query();

  }

  return (
    <>
      <input
        className="form-control p-2"
        type="text"
        placeholder={"Search albums, tracks or artists"}
        value={searchString}
        onChange={searchItunesApi}
      />
    </>
  )

}