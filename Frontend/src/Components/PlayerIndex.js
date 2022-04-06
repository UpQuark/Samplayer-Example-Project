import react, { useState } from "react";
import { Outlet }          from 'react-router-dom';
import PlayBar    from "./PlayBar";

/**
 * Route-component for the index of application routes on which a music player can be overlayed.
 * In practice this would usually apply to everything but may exclude something like settings or login.
 * @returns {JSX.Element}
 * @constructor
 */
export default function PlayerIndex() {
  // URL of currently playing sound file
  const [playingTrackUrl, setPlayingTrackUrl] = useState("");
  return (
    <>
      <Outlet context={[playingTrackUrl, setPlayingTrackUrl]}/>
      {playingTrackUrl && <PlayBar trackUrl={playingTrackUrl}/>}
    </>

  )
}