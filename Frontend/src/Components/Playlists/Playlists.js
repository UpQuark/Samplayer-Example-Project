import React        from 'react'
import { Col, Row } from "react-bootstrap";

/**
 * Index route for playlist viewing and editing. Placeholder with no current function.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Playlists() {
  return (
    <Row className={"mb-2"}>
      <Col className={"col"}>
        <h1>Playlists</h1>
        <p>
          Congratulations! You can't make a playlist yet.
        </p>
      </Col>
    </Row>)
}