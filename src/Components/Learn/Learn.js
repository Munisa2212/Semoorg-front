import React, { useState } from "react";
import styled from "styled-components";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

const StyledLearn = styled.section`
  text-align: left;
  background: #f9f6f1;
  padding: 8rem 0;
  position: relative;
  .react-multiple-carousel__arrow {
    display: none !important;
  }
  .react-multi-carousel-list {
    overflow: visible;
  }
  img {
    box-shadow: rgba(175, 143, 92, 0.4) -5px 5px,
      rgba(175, 143, 92, 0.3) -10px 10px, rgba(175, 143, 92, 0.2) -15px 15px,
      rgba(175, 143, 92, 0.1) -20px 20px, rgba(175, 143, 92, 0.05) -25px 25px;
  }

  .titleH {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .titleP {
    font-size: 1rem;
    color: #666;
    margin-bottom: 3rem;
    max-width: 700px;
  }

  .carousel-item-padding-40-px {
    padding: 0 10px;
  }

  .sliderImg {
    user-select: none;
    pointer-events: auto;
    cursor: pointer;
  }

  .card-body,
  .card-title {
    user-select: none;
  }

  .carousel-container * {
    user-select: none;
  }

  .custom-button-group {
    position: absolute;
    top: -2rem;
    right: 1rem;
    display: flex;
    gap: 1rem;
    z-index: 10;

    button {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 1.8rem;
      color: #333;
      transition: color 0.2s;

      &:hover {
        color: #555;
      }
    }
  }
`;

const CustomButtonGroup = ({ next, previous }) => (
  <div className="custom-button-group">
    <button onClick={previous} aria-label="Previous">
      <i className="bi bi-arrow-left-circle"></i>
    </button>
    <button onClick={next} aria-label="Next">
      <i className="bi bi-arrow-right-circle"></i>
    </button>
  </div>
);

const Learn = ({ deviceType, data }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
      slidesToSlide: 4,
    },
    desktopmin: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  

  return (
    <StyledLearn className="StyledLearn">
      <div className="container">
        <span className="titleSpan">Project Gallery</span>
        <h1 className="titleH">OUR PROJECTS</h1>
        <p className="titleP">
          This is the space to introduce visitors to the business or brand.
          Briefly explain who's behind it, what it does and what makes it
          unique. Share its core values and what this site has to offer.
        </p>

        <MultiCarousel
          swipeable
          draggable
          responsive={responsive}
          ssr
          infinite
          autoPlay={false}
          autoPlaySpeed={5000}
          customTransition="all 2s"
          transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customButtonGroup={<CustomButtonGroup />}
          renderButtonGroupOutside={false}
        >
          {data.map((item, index) => (
            <div key={index} className="mt-4">
              <Card className="w-100" style={{ maxWidth: "17rem", userSelect: "none" }}>
                <div className="position-relative">
                  <Card.Img
                    className="sliderImg"
                    variant="top"
                    src={item.main}
                    alt={`Project image ${index + 1}`}
                    draggable={false}
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              </Card>
            </div>
          ))}
        </MultiCarousel>
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0">
          <Carousel
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            indicators={false}
          >
            {data.map((item, i) => (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={item.main}
                  alt={`Slide ${i}`}
                   style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </StyledLearn>
  );
};

export default Learn;
