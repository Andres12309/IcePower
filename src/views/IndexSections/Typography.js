import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Typography() {
  return (
    <div className="section section-typo">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path3.png")}
      />
      <Container>
        <div id="images">
          <h3 className="mb-5">Images</h3>
          <Row>
            <Col sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Image
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/ryan.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
            <Col sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Circle Image
              </small>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow"
                src={require("assets/img/james.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Raised
              </small>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/lora.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
            <Col className="mt-5 mt-sm-0" sm="3" xs="6">
              <small className="d-block text-uppercase font-weight-bold mb-4">
                Circle Raised
              </small>
              <img
                alt="..."
                className="img-fluid rounded-circle shadow-lg"
                src={require("assets/img/mike.jpg")}
                style={{ width: "150px" }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
