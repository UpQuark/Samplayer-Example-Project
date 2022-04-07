import React, { useState }        from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import * as Icons                              from "react-feather";
import { Link }                                from "react-router-dom";
import "./MainNavigation.scss";

/**
 * Core navbar that sits fixed at the top of page and contains links to primary routes
 * @returns {JSX.Element}
 * @constructor
 */
export default function MainNavigation() {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" fixed="top" className={"main-navigation mb-3"} expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/" className={"fw-bold me-5 text-primary"}>
          <Icons.Music title="A musical note and Samplayer's logo" className={"me-2"}/>
            SamPlayer
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className={"me-4 my-2"}>
              <Link to={""} onClick={() => setExpanded(false)} >
                <Icons.Home/> Home
              </Link>
            </Nav.Item>
            <Nav.Item className={"me-4 my-2"}>
              <Link to={"search"} onClick={() => setExpanded(false)} >
                <Icons.Search/> Search
              </Link>
            </Nav.Item >
            <Nav.Item className={"me-4 my-2"}>
              <Link to={"playlists"} onClick={() => setExpanded(false)} >
                <Icons.List/> Playlists
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}