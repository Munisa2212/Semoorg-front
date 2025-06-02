import React from "react";
import stripeImg from "../../assets/1.svg";
import airbnbImg from "../../assets/2.svg";
import discordImg from "../../assets/3.svg";
import intercomImg from "../../assets/4.svg";
import pinterestImg from "../../assets/5.svg";
import netflixImg from "../../assets/6.svg";
import styled from "styled-components";

const StyledCompanies = styled.section`
  text-align: center;
  padding: 40px 0;
  div {
    display: flex;
    justify-content: space-evenly;
    margin-top: 60px;
    flex-wrap: wrap;
  }
`;

function Companies() {
  return (
    <StyledCompanies>
      <span className="titleSpan uppercase">
        {`Our Trusted Partners`.toUpperCase()}
      </span>
      <div className="partnersBlock">
        <img src={stripeImg} alt="img" />
        <img src={airbnbImg} alt="img" />
        <img src={discordImg} alt="img" />
        <img src={intercomImg} alt="img" />
        <img src={pinterestImg} alt="img" />
        <img src={netflixImg} alt="img" />
      </div>
    </StyledCompanies>
  );
}

export default Companies;
