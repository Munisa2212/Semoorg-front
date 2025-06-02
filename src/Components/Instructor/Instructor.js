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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni eos ut veritatis.
                  </p>
                  <StyledNumberBox>
                    <ul>
                      <li>
                        <h2 className="titleH fw-bold">45</h2>
                        <span>Painting</span>
                      </li>
                      <li>
                        <h2 className="titleH fw-bold">10,500+</h2>
                        <span>Our works</span>
                      </li>
                      <li>
                        <h2 className="titleH fw-bold">3+</h2>
                        <span>Cities</span>
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
