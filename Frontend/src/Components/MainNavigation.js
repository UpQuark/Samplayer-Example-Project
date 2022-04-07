import React                                   from "react";
import { Container, Nav, Navbar }              from "react-bootstrap";
import * as Icons                              from "react-feather";
import { Link }                                from "react-router-dom";
import "./MainNavigation.scss";

/**
 * Core navbar that sits fixed at the top of page and contains links to primary routes
 * @returns {JSX.Element}
 * @constructor
 */
export default function MainNavigation() {
  return (
    <Navbar bg="light" fixed="top" className={"main-navigation mb-3"} expand="lg">
      <Container>
        <Navbar.Brand href="/" className={"text-primary me-5"}>
          <Icons.Music className={"me-2"}/>
          <span>
            SamPlayer
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className={"me-4 my-2"}>
              <Link to={""}>
                <Icons.Home/> Home
              </Link>
            </Nav.Item>
            <Nav.Item className={"me-4 my-2"}>
              <Link to={"search"}>
                <Icons.Search/> Search
              </Link>
            </Nav.Item >
            <Nav.Item className={"me-4 my-2"}>
              <Link to={"playlists"}>
                <Icons.List/> Playlists
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}