import React, { useEffect, useState } from 'react'
import { Col, Row }                   from "react-bootstrap";
import * as Icons                     from 'react-feather'

/**
 * @param props
 * @param props.playingTrackUrl {String} - URL of track that is currently playing, overridable by search results of
 * other tracks.
 * @param props.setPlayingTrackUrl {Function} - Setter for playingTrackUrl
 * @param props.searchResult {Object} - Single SearchResultCard returned from iTunes search API. SearchResults have variable
 * schemas depending on if a result is a song, movie, podcast, etc. This Component focuses on songs results so should
 * consistently be dealing with the below schema:
 * e.g.
 * {
 *  artistId: 1137916541
 *  artistName: "Fifty Vinc"
 *  artistViewUrl: "https://music.apple.com/us/artist/fifty-vinc/1137916541?uo=4"
 *  artworkUrl30: "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/08/f3/fb/08f3fb42-1211-e96c-1716-2cd38a24e99e/source/30x30bb.jpg"
 *  artworkUrl60: "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/08/f3/fb/08f3fb42-1211-e96c-1716-2cd38a24e99e/source/60x60bb.jpg"
 *  artworkUrl100: "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/08/f3/fb/08f3fb42-1211-e96c-1716-2cd38a24e99e/source/100x100bb.jpg"
 *  collectionCensoredName: "Hip Hop & Rap Beats 4 (Rap Instrumentals)"
 *  collectionExplicitness: "notExplicit"
 *  collectionId: 1471564310
 *  collectionName: "Hip Hop & Rap Beats 4 (Rap Instrumentals)"
 *  collectionPrice: 10.99
 *  collectionViewUrl: "https://music.apple.com/us/album/bank-heist-street-string-rap-beat-mix/1471564310?i=1471565453&uo=4"
 *  country: "USA"
 *  currency: "USD"
 *  discCount: 1
 *  discNumber: 1
 *  isStreamable: true
 *  kind: "song"
 *  previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d4/6d/7a/d46d7a3e-bbb5-0fe9-3926-2c9f587426c3/mzaf_4741515181703548540.plus.aac.p.m4a"
 *  primaryGenreName: "Hip-Hop/Rap"
 *  releaseDate: "2019-07-02T12:00:00Z"
 *  trackCensoredName: "Bank Heist (Street String Rap Beat Mix)"
 *  trackCount: 14
 *  trackExplicitness: "notExplicit"
 *  trackId: 1471565453
 *  trackName: "Bank Heist"
 *  trackNumber: 11
 *  trackPrice: 0.99
 *  trackTimeMillis: 225419
 *  trackViewUrl: "https://music.apple.com/us/album/bank-heist-street-string-rap-beat-mix/1471564310?i=1471565453&uo=4"
 *  wrapperType: "track"
 * }
 * Note: This is a good example of where a Typescript object definition like "iTunesApiResponse" would be useful.
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchResultCard( props ) {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
      setIsPlaying(props.searchResult.previewUrl === props.playingTrackUrl)
    },
    [props.playingTrackUrl, props.searchResult.previewUrl]
  )

  function toggleSong() {
    if ( isPlaying ) {
      props.setPlayingTrackUrl("");
    } else {
      props.setPlayingTrackUrl(props.searchResult.previewUrl);
    }

    // isPlaying = !isPlaying;
  }

  function addToPlaylist() {
    console.debug("Song added to playlist")
  }

  return (

    <div className={"card card-body my-2 text-start"}>
      <Row>
        <Col xs={3} className={"p-1"} onClick={toggleSong}>
          <Row>
            <Col xs={12}>
              <img src={props.searchResult.artworkUrl60} alt={`Album artwork for props.searchResult.collectionName`}/>
            </Col>
            <Col xs={12}>
              {!isPlaying &&
                <button className={"btn btn-outline-secondary my-1 p-1 border-0"} style={{ fontSize: "0.7rem" }}>
                  <Icons.PlayCircle/> Play
                </button>
              }
              {isPlaying &&
                <button className={"btn btn-outline-secondary my-1 p-1 border-0"} style={{ fontSize: "0.7rem" }}>
                  <Icons.StopCircle/> Stop
                </button>
              }

            </Col>
          </Row>
        </Col>

        <Col xs={9} className={"ps-2"}>
          {props.searchResult.wrapperType === "track" &&
            <p className={"m-0"}>
              <strong>{props.searchResult.trackCensoredName}</strong>
            </p>
          }

          {props.searchResult.artistName &&
            <span className={"text-muted"}>
               {props.searchResult.artistName}
            </span>
          }

          <hr className={"my-1"}/>

          {props.searchResult.collectionName &&
            <span className={"text-primary"} style={{ fontSize: "0.8rem" }}>
              {props.searchResult.collectionName}
            </span>
          }
          <div>
            <button
              className={"btn btn-outline-secondary my-1 p-1 border-0"}
              style={{ fontSize: "0.7rem" }}
              onClick={addToPlaylist}
            >
              <Icons.PlusSquare/> Add to playlist
            </button>
          </div>
        </Col>

      </Row>

    </div>
  )
}