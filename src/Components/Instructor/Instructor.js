import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.jpg";

const StyledInstructor = styled.section`
  background: #f9f6f1;
  padding: 8rem 0;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        color: #64748b;
      }
    }
  }
  h2 {
    color: #af8f5c;
  }
  .imgBoxAbout {
    border-radius: 20px;
    overflow: hidden;
    width: 400px;
    height: 400px;
  }
`;

const StyledNumberBox = styled.div`
  border-top: 1px solid rgba(153, 153, 153, 0.11);
  width: 80%;
`;

function Instructor() {
  return (
    <StyledInstructor className="styledInstructor">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              {/* left */}
              <div className="col-lg-6 col-sm-12 d-flex alig-items-center">
                <div>
                  <h1 className="titleH">
                    Hi, we are <span className="primaryColor">Semoorg</span>,
                    about our company
                  </h1>
                  <p className="titleP">
                    We are passionate innovators driven by purpose. At Semoorg,
                    we turn ideas into impactful solutions, blending creativity
                    with technology to shape a better future.
                  </p>
                  <StyledNumberBox>
                    <ul>
                      <li>
                        <h2 className="titleH fw-bold">120</h2>
                        <span>Projects Completed</span>
                      </li>
                      <li>
                        <h2 className="titleH fw-bold">25,000+</h2>
                        <span>Artworks Delivered</span>
                      </li>
                      <li>
                        <h2 className="titleH fw-bold">8+</h2>
                        <span>Cities Served</span>
                      </li>
                    </ul>
                  </StyledNumberBox>
                </div>
              </div>
              {/* right */}
              <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-itens-center">
                <div className="imgBoxAbout">
                  <img src={logo} className="w-100" alt="image user" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledInstructor>
  );
}

export default Instructor;
