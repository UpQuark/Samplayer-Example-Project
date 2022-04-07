import React, { useState }  from 'react';
import { Col, Row }         from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import SearchBar        from "./SearchBar";
import SearchResultCard from "./SearchResultCard";

/**
 * Root search route, managing searching iTunes tracks and the display of existing searches
 * Notes:
 * @returns {JSX.Element}
 * @constructor
 */
export default function Search() {
  let [searchResults, setSearchResults] = useState({});
  const [playingTrackUrl, setPlayingTrackUrl] = useOutletContext();

  // Build list of results if response data from iTunes is present
  let results = ""
  if ( searchResults.results && searchResults.results.length ) {
    results = searchResults.results.map(( result, key ) => {
      return <SearchResultCard
        searchResult={result}
        playingTrackUrl={playingTrackUrl}
        setPlayingTrackUrl={setPlayingTrackUrl}
        key={key}/>
    })
  }

  return (
    <>
      <Row className={"row mb-2"}>
        <Col md={6}>
          <h1>Search</h1>
          <SearchBar searchResults={searchResults} setSearchResults={setSearchResults}/>
        </Col>
        <Col md={6} className={"mt-2"}>
          <section>
            {results ?
              results :
              <span className="text-muted">No results yet</span>
            }
          </section>
        </Col>
      </Row>
    </>
  )
}