import React                                   from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import * as Icons                              from "react-feather";
import "./MainNavigation.scss";
import { Link }                                from "react-router-dom";

/**
 * Core nav element
 * @returns {JSX.Element}
 * @constructor
 */
export default function MainNavigation() {
  return (
    <Navbar bg="light" fixed="top" className={"main-navigation mb-3"} expand="lg">
      <Container>
        <Navbar.Brand href="/" className={"text-primary"}>
          <Icons.Music className={"me-2"}/>
          <span>
            SamPlayer
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className={"my-2"}>
              <Link to={""}>
                <Icons.Home/> Home
              </Link>
            </Nav.Item>
            <Nav.Item className={"my-2"}>
              <Link to={"search"}>
                <Icons.Search/> Search
              </Link>
            </Nav.Item >
            <Nav.Item className={"my-2"}>
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