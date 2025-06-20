import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import leftImage from "../../assets/backgrounds/0.png";
import MyButton from "../MyButton/MyButton";

import axios from "axios";

const StyledForms = styled.section`
  background: #f9f6f1;
  padding: 8rem 0;
  .formInner {
    width: 100%;
    height: 70vh;
    border: 1px solid #af8f5c;
    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }
  .right {
    padding: 2rem;
  }
`;

function Forms() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}`,
        formData
      );
      alert(response.data.message);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  };

  return (
    <StyledForms className="Forms">
      <div className="container">
        <div className="row">
          {/* left */}
          <div className="col-lg-6 col-sm-12 d-flex alig-items-center">
            <div className="formInner">
              <img src={leftImage} alt="image user" />
            </div>
          </div>
          {/* right */}
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-itens-center">
            <div className="formInner right">
              <form onSubmit={handleSubmit}>
                <h1 className="fw-bold">Contact us</h1>
                {/* -------------------Form------------------------- */}
                <Form.Group className="mb-3 mt-4" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    className="py-2"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    className="py-2"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    className="py-2"
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    className="py-2"
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    placeholder="Message"
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="d-flex justify-content-end">
                  <MyButton
                    type="submit"
                    className="mt-2"
                    title={"CONTACT US"}
                    variant={"dark"}
                    rangi={"#AF8F5C"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </StyledForms>
  );
}

export default Forms;
