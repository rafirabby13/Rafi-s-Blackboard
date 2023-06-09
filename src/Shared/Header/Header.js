import React, { useContext } from "react";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBeer, FaUserAlt } from "react-icons/fa";
import "./Header.css";
import {
  Button,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { AuthContext } from "../../Pages/ContextProvider/ContextProvider.js";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  

  const handleLogOut = () => {
    logout()
      .then(() => {
        alert("logged out successfully");
      })
      .catch((error) => {
        console.error("error from header", error);
      });
  };
  return (
    <Navbar  expand="lg" className="navbar-1">
      <Container>
        <div className="icon-name">
          <Navbar.Brand href="#home">
            <Link to='/'>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block mb-3"
              alt="React Bootstrap logo"
            />.
            </Link>
          </Navbar.Brand>
          <Navbar.Brand  to="/"><span className="header-name">RAFI's <span className="board">Blackboard</span></span ></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-items" to='/courseList/1'>Courses</Link>
              <Link className="nav-items">FAQ</Link>
              <Link className="nav-items">Blog</Link>
              {user?.uid ? (
                <Link className="nav-items">
                  <Button variant="outline-danger" onClick={handleLogOut}>
                    Logout
                  </Button>
                </Link>
              ) : (
                <Link className="nav-items" to="/optionlogin">
                  Login
                </Link>
              )}
              {user?.photoURL ?
              
              (
                <Image title={user?.email} src={user.photoURL} style={{cursor: "pointer"}}></Image>
              ) : (
                <FaUserAlt title={user?.email} style={{ color: "rgb(244, 15, 198)", cursor:"pointer" }} ></FaUserAlt>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
