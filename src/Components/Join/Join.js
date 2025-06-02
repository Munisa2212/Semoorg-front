import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Section = styled.section`
  display: flex;
  height: 600px;
  padding: 20px;
  margin-bottom: 40px;
`;

const LeftSide = styled.div`
  flex: 2.3;
  display: flex;
  width: 30%;
  margin-right: 20px;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const ColorBlock = styled.div`
  position: absolute;
  top: 30px;
  left: -7%;
  width: 65%;
  height: 90%;
  padding-right: 15px;
  color: #fff;
  background: #a69470;
  background: linear-gradient(
    180deg,
    rgba(166, 148, 112, 1) 0%,
    rgba(237, 228, 211, 1) 100%,
    rgba(237, 228, 211, 1) 100%
  );

  border-radius: 12px;
  z-index: 0;
  writing-mode: vertical-rl;
  transform: rotate(180deg); /* optional: flips it top-to-bottom */
  text-align: center;
  font-size: 30px;
  letter-spacing: 8px;
`;

const MainImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 85%;
  height: 70%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  border-radius: 12px;
  animation: ${(props) =>
      props.animate === "left" ? "slideLeft" : "slideRight"}
    0.6s ease;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const RightSide = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 10px;

  i {
    font-size: 32px;
    cursor: pointer;
    color: #AF8F5C;
  }
`;

const TextContent = styled.div`
  animation: ${(props) => (props.animate === "left" ? "fadeLeft" : "fadeRight")}
    0.6s ease;
`;

const Title = styled.h1`
  margin: 10px 0 5px;
  font-size: 4em;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 0;
  color: #868686;
`;

const SmallImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const SmallImage = styled.img`
  width: 30%;
  height: 110px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const slideKeyframes = `
  @keyframes slideLeft {
    0% {
      opacity: 0;
      transform: translateX(-60px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideRight {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeLeft {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeRight {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
const GlobalStyle = createGlobalStyle`${slideKeyframes}`;

function Join({ data }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const [direction, setDirection] = useState("right");

  return (
    <div className="container">
      <GlobalStyle />
      <Section className="specialisation">
        <LeftSide className="leftSide">
          <ColorBlock className="mainImageWrapper">OUR SPECIALISATION</ColorBlock>
          <MainImageWrapper key={index} animate={direction}>
            <MainImage src={data[index].main} alt={`Slide ${index}`} />
          </MainImageWrapper>
        </LeftSide>

        <RightSide>
          <div>
            <Controls>
              <i className="bi bi-arrow-left-circle" onClick={prevSlide}></i>
              <i className="bi bi-arrow-right-circle" onClick={nextSlide}></i>
            </Controls>

            <TextContent key={`text-${index}`} animate={direction}>
              <Title>{data[index].title}</Title>
              <Description>{data[index].description}</Description>
            </TextContent>
          </div>

          <SmallImagesContainer>
            {data[index].small.map((img, i) => (
              <SmallImage key={i} src={img} alt={`Small ${i}`} />
            ))}
          </SmallImagesContainer>
        </RightSide>
      </Section>
    </div>
  );
}

export default Join;
