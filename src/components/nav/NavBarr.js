import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./NavBarr.css";
const NavBarr = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <img src="img/logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <HashLink to="/#builds" className=" nav-link">
                Latest Builds
              </HashLink>
              <HashLink to="/#process" className=" nav-link process">
                Process
              </HashLink>
              <HashLink to="/#services" className=" nav-link services">
                Services
              </HashLink>
              <Link to="/projects" className=" nav-link services">
                Projects
              </Link>
              <HashLink to="/#contact">
                <Button variant="outline-danger" className="contact-btn">
                  contact with us
                  <i class="fa-solid fa-angle-right"></i>
                </Button>
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarr;
