import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <section className="header">
      <Container fluid>
        <Row>
          <Col md={7} sm={12}>
            <div className="content">
              <h1 className="text-white">
                Turn your website into a <br />
                <span>user-acquisition engine</span>.
              </h1>
              <p className="text-white-50">
                We build marketing websites that help you sell on autopilot.
              </p>
              <Button className="bttn">Let's talk</Button>
            </div>
          </Col>
          <Col md={5} sm={12} className="right-header">
            <div className="parent-imgs">
              <img src="img/waves.png" className="waves" alt="" />
              <img
                src="img/623a183aa76fb537cbc5dc0e_Group 8-p-500.png"
                className="laptop"
                alt=""
              />
              <div className="parent-img wimg">
                <img src="img/child1.png" alt="header" />
              </div>
              <div className="parent-img ximg">
                <img src="img/child2.png" alt="header" />
              </div>
              <div className="parent-img yimg">
                <img src="img/child3.png" alt="header" />
              </div>
              <div className="parent-img zimg">
                <img src="img/child4.png" alt="header" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
