import React from "react";
import { useNavigate } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function PageHeader() {
  const navigate = useNavigate();
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
              <h1 className="text-white" style={{ fontSize: 50 }}>
                IcePower
              </h1>
              <p className="text-white mb-3">
                Imagina, Crea y Saborea la frescura en cada sorbo.
              </p>
              <div className="mb-3">
                <Button
                  className="btn-link category text-success"
                  size="sm"
                  onClick={() => {
                    navigate("/register-page");
                  }}
                >
                  Únete a la Frescura...
                  <i className="tim-icons icon-minimal-right" />
                </Button>
              </div>
              <div className="btn-wrapper">
                <div className="button-container">
                  <Button
                    className="btn-icon btn-simple btn-round btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button
                    className="btn-icon btn-simple btn-round btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                  <Button
                    className="btn-icon btn-simple btn-round btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-tiktok" />
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="5">
              <img
                alt="..."
                className="img-fluid"
                src={require("assets/img/vaso.png")}
                style={{ height: 400 }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
