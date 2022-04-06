import react, { useState } from "react";
import { Outlet }          from 'react-router-dom';
import PlayBar    from "./PlayBar";


export default function PlayerIndex() {
  const [playingTrackUrl, setPlayingTrackUrl] = useState("");
  return (
    <>
      <Outlet context={[playingTrackUrl, setPlayingTrackUrl]}/>
      {playingTrackUrl && <PlayBar trackUrl={playingTrackUrl}/>}
    </>

  )
}