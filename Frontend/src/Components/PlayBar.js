import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import * as Icons from 'react-feather';

/**
 * A responsive sound player that fixes to the bottom of the viewport.
 * @param props
 * @param props.playingTrackUrl {string} - URL of track currently loaded by soundbar
 * @param props.setPlayingTrackUrl {function} - Setter of above
 * @returns {*}
 * @constructor
 */
export default function PlayBar(props) {

  function stopSong() {
    props.setPlayingTrackUrl("");
  }

  return (
    <AudioPlayer
      className={"fixed-bottom"}
      autoPlay
      src={props.playingTrackUrl}
      customAdditionalControls={[
        <button className={"btn text-muted"} onClick={stopSong}>
          <Icons.StopCircle title="A stop button for stopping music" style={{height: "34px", width: "34px"}}/>
        </button>
      ]}
    />
  )
}