import React, { useContext } from "react";
import logo from "../../assets/logo.jpg";
import styled from "styled-components";
import ThemeContext from "../../Context/ThemeContext";
// ------------
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import MyButton from "../MyButton/MyButton";

const IconTheme = styled.i`
  cursor: pointer !important;
  margin: 0 15px;
`;

const LinksNavbar = styled.div`
  display: flex;
  gap: 1rem;

  .nav-link {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: #191911;
    padding: 0.5rem 0;
    transition: color 0.3s;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 0;
      background-color: #af8f5c;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }

    &.active {
      font-weight: bold;
      &::after {
        width: 100%;
      }
    }
    &.focus {
      font-weight: bold;
      &::after {
        width: 100%;
      }
    }
  }
`;

function NavigationBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar
      sticky="top"
      bg={`${theme === "light" ? "light" : "dark"}`}
      variant={`${theme === "light" ? "light" : "dark"}`}
      expand="lg"
      className="MyNavbar shadow p-0"
    >
      <Container>
        <Navbar.Brand className="p-0" href="#HeaderId">
          <img
            alt="Sermoorg"
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 fw-bold"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinksNavbar className="LinksNavbar">
              <Nav.Link href="#HeaderId">HOME</Nav.Link>
              <Nav.Link href="#InstructorId">ABOUT</Nav.Link>
              <Nav.Link href="#TestimonialsId">SERVICES</Nav.Link>
              <Nav.Link href="#LearnId">OUR WORK</Nav.Link>
            </LinksNavbar>
          </Nav>
          <div className="dropdownNavbar d-flex justify-content-end align-items-center">
            <IconTheme
              onClick={() =>
                toggleTheme(`${theme === "light" ? "light" : "dark"}`)
              }
              className={`bi bi-${
                theme === "light" ? "moon" : "brightness-high"
              }`}
            ></IconTheme>

            <a href="#FormsId">
              {" "}
              <MyButton
                title={"CONTACT US"}
                variant={"dark"}
                rangi={"#AF8F5C"}
              />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
