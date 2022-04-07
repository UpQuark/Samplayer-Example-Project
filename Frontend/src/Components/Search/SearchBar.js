import React, { useState } from 'react';
import { DebounceInput }   from "react-debounce-input";

/**
 * Searchbar for accepting search terms and sending them to iTunes API. Debounces input to prevent an HTTP request for
 * every keystroke.
 * @param props
 * @param props.searchResults {Array} - A list of SearchResults retrieved from the iTunes search API. See
 * https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api for response formats.
 * @param props.setSearchResults {Function} - Setter for searchResults
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

    try {
      const response = await fetch(`https://itunes.apple.com/search?term=${event.target.value}&entity=song`);
      props.setSearchResults(await response.json());
    } catch ( e ) {
      // In the real world, you may want to persist this to a telemetry service and handle 404s before it
      console.debug(JSON.stringify(e));
      props.setSearchResults({});
    }
  }

  return (
    <DebounceInput
      className="form-control p-2"
      placeholder={"Search albums, tracks or artists"}
      minLength={2}
      debounceTimeout={200}
      value={searchString}
      onChange={searchItunesApi}
    />
  )
}