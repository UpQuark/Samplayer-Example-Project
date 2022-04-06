import React      from 'react';
import * as Icons from 'react-feather';
import { Link }     from "react-router-dom";
import { Col, Row } from "react-bootstrap";

/**
 * Home route component for navigation between multiple other routes
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
  return (
    <Row className={"pt-3"}>
      <Col md={6} className={"my-2"}>
        <Link to={"search"}>
          <div className={"card card-body p-3 text-start"}>
            <span className={"text-dark text-decoration-none"}>
              <Icons.Search className={"text-primary me-2"}/> Search artists, albums and tracks.
            </span>
          </div>
        </Link>
      </Col>

      <Col md={6} className={"my-2"}>
        <Link to={"playlists"}>
          <div className={"card card-body p-3 text-start"}>
            <span className={"text-dark text-decoration-none"}>
              <Icons.List className={"text-primary me-2"}/> View Playlists
            </span>
          </div>
        </Link>
      </Col>
    </Row>
  )
}