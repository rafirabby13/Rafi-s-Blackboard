import React from "react";
import img1 from "../../assets/img1.jpg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">Rafi's Blackboard</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-items">Courses</Link>
              <Link className="nav-items">FAQ</Link>
              <Link className="nav-items">Blog</Link>
              <Link className="nav-items" to='/optionlogin'>Login</Link>
            </Nav>
          </Navbar.Collapse>
          
        </div>
       
      </Container>
    </Navbar>
  );
};

export default Header;
