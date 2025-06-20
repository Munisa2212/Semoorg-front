import React from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import MyButton from "../MyButton/MyButton";

const StyledQuestions = styled.section`
  text-align: center;
  padding: 8rem 0;
  .accordion-button {
    background-color: #fff;
    color: #111827;
    font-weight: 600;
    font-size: 1.1rem;
    font-size: 22px;
    padding-top: 20px;
    padding-bottom: 20px;
    &:focus {
      box-shadow: none;
    }
    &:not(.collapsed) {
      background-color: none;
    }
    &::after {
      display: none !important;
    }
  }
  .accordationBlock {
    margin-top: 80px;
    .accordion-body {
      font-size: 20px;
      color: #64748b;
      text-align: left;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    i {
      color: #af8f5c;
    }
  }
`;

const StyledMyButton = styled(MyButton)`
  background: none;
  border: 1px solid #af8f5c;
  color: #af8f5c;
  margin: 40px auto;
  &:hover {
    background: #af8f5c;
    color: #fff;
    border: 1px solid #af8f5c;
  }
`;

function Questions() {
  return (
    <StyledQuestions>
      <div className="container">
        <span className="titleSpan">(FAQs)</span>
        <h1 className="titleH">Frequently Asked Questions.</h1>
        <p className="titleP">
          Dive into our most common inquiries to discover how Semoorg can bring
          your vision to life.
        </p>
        {/* // -------------------------------------------------- */}
        <div className="accordationBlock">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-8 col-12">
              {/* // -----------------------Accordion--------------------------- */}
              <div className="innerAcord">
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      What types of construction services do you offer?
                      <span className="collapse-toggle ms-auto">
                        <i className="bi bi-plus-lg"></i>
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      We provide a wide range of services including residential
                      and commercial construction, renovations, remodeling,
                      project management, and custom builds.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Are you licensed and insured?
                      <span className="collapse-toggle ms-auto">
                        <i className="bi bi-plus-lg"></i>
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, we are fully licensed, bonded, and insured. We adhere
                      to all local and national building regulations to ensure
                      your project is safe and compliant.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      How long will my construction project take?
                      <span className="collapse-toggle ms-auto">
                        <i className="bi bi-plus-lg"></i>
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      The timeline depends on the size and scope of the project.
                      After an initial consultation and planning phase, we’ll
                      provide a detailed project schedule.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Can I make changes during the construction process?
                      <span className="collapse-toggle ms-auto">
                        <i className="bi bi-plus-lg"></i>
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, we understand that ideas can evolve. We accommodate
                      changes whenever possible and will discuss any adjustments
                      to cost or schedule before proceeding.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <StyledMyButton
                  title={"More questions? Visit the Learner Help Center."}
                  variant={"dark"}
                  rangi={"red"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledQuestions>
  );
}

export default Questions;
