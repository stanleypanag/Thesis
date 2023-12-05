import React from "react";
import "./header.css";

// Imports for Bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

// routing imports
import {Link} from "react-router-dom";

// import from assets
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="logo-container">
              <img className="logo" src={logo} />
              <h1>Bayan ng Naic</h1>
            </Navbar.Brand>
            <Navbar.Toggle
              className="navbar-toggler"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className="menu-header" closeButton>
                <Offcanvas.Title
                  className="menu-header-title"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  MENU
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="nav-links-container">
                <Nav className="nav-links justify-content-end flex-grow-1 pe-3 mb-1">
                  <Nav.Link className="links" as={Link} to="/">
                    HOME
                  </Nav.Link>
                  <Nav.Link className="links" as={Link} to="/about">
                    ABOUT
                  </Nav.Link>
                  <Nav.Link className="links" as={Link} to="/contacts">
                    CONTACTS
                  </Nav.Link>
                  <Nav.Link className="links" as={Link} to="/resolutions">
                    RESOLUTIONS
                  </Nav.Link>
                  <Nav.Link className="links" as={Link} to="/ordinances">
                    ORDINANCES
                  </Nav.Link>
                </Nav>

                <Form className="form d-flex">
                  <Form.Control
                    type="search"
                    placeholder="search documents"
                    className="search-box me-3"
                    aria-label="Search"
                  />
                  <Button variant="dark">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
