import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container-1">
                {/* <img
                  alt="..."
                  src={require("assets/img/demo-image-1-min.jpg")}
                ></img> */}
              </div>
              <div className="hero-images-container-1">
                {/* <img
                  alt="..."
                  src={require("assets/img/demo-image-2-min.jpg")}
                ></img> */}
              </div>
              <div className="hero-images-container-2">
                {/* <img
                  alt="..."
                  src={require("assets/img/demo-image-3-min.jpg")}
                ></img> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
