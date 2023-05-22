import React, { useContext } from "react";
import img1 from "../../assets/img1.jpg";
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
  console.log(user);

  const handleLogOut = () => {
    logout()
      .then(() => {
        alert("logged out successfully");
      })
      .catch((error) => {
        console.error("errro from header", error);
      });
  };
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
                <Image src={user.photoURL}></Image>
              ) : (
                <FaUserAlt style={{ color: "black" }}></FaUserAlt>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
