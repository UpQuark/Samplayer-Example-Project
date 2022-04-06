import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

/**
 *
 * @param props
 * @param props.trackUrl
 * @returns {*}
 * @constructor
 */
export default function PlayBar(props) {
  return (
    <AudioPlayer
      className={"fixed-bottom"}
      autoPlay
      src={props.trackUrl}
      onPlay={e => console.log("onPlay")}
      // other props here
    />
  )
}