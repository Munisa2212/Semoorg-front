import React from "react";
import styled from "styled-components";
// images
import logo from "../../assets/logo.jpg";
import MapSection from "../MapSection/MapSection";

const StyledFooter = styled.footer`
  padding-top: 40px;
  .footerImgBox {
    width: 100px;
    border-radius: 10px;
    overflow: hidden;
  }
  .footerDown {
    margin-top: 40px;
    padding: 6px 0;
    border-top: 1px solid #eee;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    ul {
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 1rem;
    }
    a {
      color: #af8f5c !important;
    }
  }
  h4,
  h5 {
    color: #000 !important;
    font-weight: 600;
  }
  li {
    margin-top: 10px;
    a {
      text-decoration: none !important;
    }
  }
  a {
    font-weight: 500 !important;
    text-decoration: underline !important;
  }
  a:hover {
    color: #af8f5c !important;
  }
  .FIconBox i:hover {
    color: #af8f5c;
    cursor: pointer;
  }
`;

function Footer({ users, theme }) {
  return (
    <StyledFooter className="StyledFooter">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 col-lg-5">
            <div className="footerImgBox mb-2">
              <img className="w-100" src={logo} alt="Logo" />
            </div>
            <span className="titleSpan">Semoorg</span>
            <div className="mt-4 mb-4">
              <span>©2024 by Longsword Building and Maintenance Services.</span>
              <br />
              {/* <a href="#">Privacy Policy</a> */}
            </div>
           <span className="FIconBox">
              <a href="https://www.facebook.com/Semoorgh">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-twitter ms-2 me-2"></i>
              </a>
              <a href="https://www.instagram.com/semoorg/">
                <i className="bi bi-instagram"></i>
              </a>
            </span>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Company</h5>
            <div className="d-flex">
              <ul>
                <li>
                  <a href="#HeaderId">Home</a>
                </li>
                <li>
                  <a href="#InstructorId">About</a>
                </li>
                <li>
                  <a href="#TestimonialsId">Services</a>
                </li>
                <li>
                  <a href="#LearnId">Our Works</a>
                </li>
                <li>
                  <a href="#FooterId">Support</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div>
              <MapSection theme={theme} />
              <span>200 Blackfriars Road London SE1 8NN </span>
            </div>
          </div>
        </div>
        <div className="footerDown">
          <span>© 2024 Semoorg, Inc. All Rights Reserved</span>
          <ul>
            <li>
              <span>
                Email: <a href="mailto:Semoorg@example.com">Semoorg@gmail.com</a>
              </span>
            </li>
            <li>
              <span>
                Phone: <b>+44 7581 029664</b>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
