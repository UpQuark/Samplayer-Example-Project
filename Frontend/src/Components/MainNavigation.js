import React                                   from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import * as Icons                              from "react-feather";
import "./MainNavigation.scss";

export default function MainNavigation() {
  return (
    <Navbar bg="light" className={"main-navigation"} expand="lg">
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="playlists">Playlists</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}