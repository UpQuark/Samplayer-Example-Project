import React      from 'react';
import * as Icons from 'react-feather';
import { Link }   from "react-router-dom";

export default function Home() {
  return (
    <div className={"row pt-3"}>

      <div className={"col-md-6 my-2"}>
        <Link to={"search"}>
          <div className={"card card-body p-3 text-center"}>
            <span className={"text-dark"}>
              <Icons.Search className={"text-primary"}/> Search artists, albums and tracks.
            </span>
          </div>
        </Link>
      </div>

      <div className={"col-md-6"}>
        <Link to={"playlists"}>
          <div className={"card card-body p-3 text-center"}>
            <span className={"text-dark"}>
              <Icons.List className={"text-primary"}/> View Playlists
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}