import React from "react";
import styled from "styled-components";

const StyledTestimonials = styled.section`
  text-align: center;
  padding: 8rem 0;
`;

const StyledInnerBlock = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  .quoteBox {
    height: 250px;
    img {
      object-fit: cover;
      height: 100%;
    }
  }

  &.InnerLeft {
    .userBox {
      background: #af8f5c !important;
    }
  }
  i {
    font-size: 50px;
  }
  p {
    font-size: 1.35rem;
    font-weight: 600;
    color: rgb(15, 15, 15);
  }

  i {
    font-size: 50px;
  }
  .userBox {
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 40px 0;
    h4 {
      font-weight: 600;
      margin-top: 20px;
    }
    span {
      color: #d7d7d7;
    }
    .imgCont {
      position: absolute;
      top: -25%;
      left: 42%;
      width: 90px;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #af8f5c;
      background: #af8f5c;
      border-radius: 50%;
      i {
        font-size: 40px;
      }
    }
  }
`;

function Testimonials({ data }) {
  return (
    <StyledTestimonials className="StyledTestimonials">
      <div className="container">
        <span className="titleSpan">Semoorg</span>
        <h1 className="titleH">OUR ADVANTAGES</h1>
        <p className="titleP">
          At Semoorg, we blend creativity, expertise, and dedication to deliver
          innovative, high-quality solutions that exceed client expectations.
        </p>
        {/* // -------------------------------------------------- */}

        <div className="row mt-4">
          {data.map((item, index) => (
            <div key={index} className="col-xl-6 col-lg-12 col-sm-12 mt-4">
              <StyledInnerBlock className="InnerLeft">
                <div className="quoteBox">
                  <img src={item.main} className="w-100" alt="img" />
                </div>
                <div className="userBox">
                  <div className="imgCont">{item.icon}</div>
                  <div className="px-4">
                    <h4>{item.title}</h4>
                    <span>{item.description}</span>
                  </div>
                </div>
              </StyledInnerBlock>
            </div>
          ))}
        </div>
      </div>
    </StyledTestimonials>
  );
}

export default Testimonials;
