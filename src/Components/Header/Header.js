import React from "react";
import MyButton from "../MyButton/MyButton";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import first from "../../assets/backgrounds/0.png";
import second from "../../assets/backgrounds/1.jpg";
import third from "../../assets/backgrounds/2.jpg";

const bgimges = [first, second, third];

const StyledP = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: #fff;
  margin: 20px 0;
`;

const StyledHeader = styled.section`
  width: 100%;
  height: 92vh;
  position: relative;
  overflow: hidden;

  .carousel,
  .carousel-inner,
  .carousel-item,
  .bgImage {
    height: 100%;
  }

  .bgImage {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .carousel-caption {
    top: 30%;
  }
  .carousel-indicators {
    display: none;
  }

  .InfoPost {
    padding: 20px;
    color: white;
    text-align: left;
  }
`;

function Header() {
  return (
    <StyledHeader className="Header">
      <Carousel>
        {bgimges.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="bgImage" src={item} alt="img" />
            <Carousel.Caption>
              <div className="InfoPost">
                <h1 className="display-4 fw-bold">
                  Create like
                  <br /> Never before
                </h1>
                <StyledP>
                  Unleash your imagination and build something extraordinary.
                  Push the boundaries of creativity and innovation—make your
                  mark on the world.
                </StyledP>
                <MyButton
                  className="mt-2"
                  title={"See more"}
                  variant={"dark"}
                  rangi={"#AF8F5C"}
                />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledHeader>
  );
}

export default Header;
