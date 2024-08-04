import React, { useState } from "react";
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

export default function Landing() {
  const initialInfo = {
    title: "Large Achivements",
    description: `I should be capable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
                  When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray.`,
  };
  const [selectedInfo, setSelectedInfo] = useState(initialInfo);

  const [selectedCard, setSelectedCard] = useState("original");

  const handleCardClick = (title, description, cardId) => {
    setSelectedInfo({ title, description });
    setSelectedCard(cardId);
  };

  const resetInfo = () => {
    setSelectedInfo(initialInfo);
    setSelectedCard("original");
  };

  return (
    <div className="section section-basic" id="basic-elements">
      <Container>
        <Row className="row-grid justify-content-between">
          <Col className="mt-lg-5" lg="6" md="12">
            <Row>
              <Col className="px-2 py-2" lg="6" sm="12">
                <Card
                  className={classnames("card-stats", {
                    "upper bg-default": selectedCard === "original",
                  })}
                  onClick={() =>
                    handleCardClick(
                      initialInfo.title,
                      initialInfo.description,
                      "original"
                    )
                  }
                >
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/vaso.png")}
                            width={50} //puro
                          />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <CardTitle tag="p">Original</CardTitle>
                          <p />
                          <p className="card-category">original</p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              {selectedCard === "original" && (
                <div className="d-lg-none">
                  <Col className="mt-lg-5 d-md-block" sm="12">
                    <div className="pl-md-5 mt-2 mt-2">
                      <h1>
                        {selectedInfo.title} <br />
                      </h1>
                      <p>{selectedInfo.description}</p>
                    </div>
                  </Col>
                </div>
              )}
              <Col className="px-2 py-2" lg="6" sm="12">
                <Card
                  className={classnames("card-stats", {
                    "upper bg-default": selectedCard === "pina",
                  })}
                  onClick={() =>
                    handleCardClick(
                      "Piña",
                      "Esta es la información de Piña.",
                      "pina"
                    )
                  }
                >
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/vaso.png")}
                            width={50}
                            style={{
                              filter:
                                "brightness(0) saturate(100%) invert(84%) sepia(80%) saturate(3550%) hue-rotate(350deg) brightness(97%) contrast(102%)",
                            }} //piña
                          />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <CardTitle tag="p">Piña</CardTitle>
                          <p />
                          <p className="card-category">Piña</p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              {selectedCard === "pina" && (
                <div className="d-lg-none">
                  <Col className="mt-lg-5 d-md-block" sm="12">
                    <div className="pl-md-5 mt-2">
                      <h1>
                        {selectedInfo.title} <br />
                      </h1>
                      <p>{selectedInfo.description}</p>
                    </div>
                  </Col>
                </div>
              )}
            </Row>
            <Row>
              <Col className="px-2 py-2" lg="6" sm="12">
                <Card
                  className={classnames("card-stats", {
                    "upper bg-default": selectedCard === "uva",
                  })}
                  onClick={() =>
                    handleCardClick(
                      "Uva",
                      "Esta es la información de Uva.",
                      "uva"
                    )
                  }
                >
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/vaso.png")}
                            width={50}
                            style={{
                              filter:
                                "brightness(0) saturate(100%) invert(23%) sepia(99%) saturate(4642%) hue-rotate(262deg) brightness(96%) contrast(106%)",
                            }} //uva
                          />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <CardTitle tag="p">Uva</CardTitle>
                          <p />
                          <p className="card-category">Uva</p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              {selectedCard === "uva" && (
                <div className="d-lg-none">
                  <Col className="mt-lg-5 d-md-block" sm="12">
                    <div className="pl-md-5 mt-2">
                      <h1>
                        {selectedInfo.title} <br />
                      </h1>
                      <p>{selectedInfo.description}</p>
                    </div>
                  </Col>
                </div>
              )}
              <Col className="px-2 py-2" lg="6" sm="12">
                <Card
                  className={classnames("card-stats", {
                    "upper bg-default": selectedCard === "fresa",
                  })}
                  onClick={() =>
                    handleCardClick(
                      "Fresa",
                      "Esta es la información de Fresa.",
                      "fresa"
                    )
                  }
                >
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/vaso.png")}
                            width={50}
                            style={{
                              filter:
                                "brightness(0) saturate(100%) invert(27%) sepia(88%) saturate(5050%) hue-rotate(340deg) brightness(96%) contrast(101%)",
                            }} //fresa
                          />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <CardTitle tag="p">Fresa</CardTitle>
                          <p />
                          <p className="card-category">Fresa</p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              {selectedCard === "fresa" && (
                <div className="d-lg-none">
                  <Col className="mt-lg-5 d-md-block" sm="12">
                    <div className="pl-md-5 mt-2">
                      <h1>
                        {selectedInfo.title} <br />
                      </h1>
                      <p>{selectedInfo.description}</p>
                    </div>
                  </Col>
                </div>
              )}
            </Row>
            <Row>
              <Col className="px-2 py-2" lg="6" sm="12">
                <Card
                  className={classnames("card-stats", {
                    "upper bg-default": selectedCard === "jamaica",
                  })}
                  onClick={() =>
                    handleCardClick(
                      "Jamaica",
                      "Esta es la información de Jamaica.",
                      "jamaica"
                    )
                  }
                >
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/vaso.png")}
                            width={50}
                            style={{
                              filter:
                                "brightness(0) saturate(100%) invert(11%) sepia(87%) saturate(7174%) hue-rotate(320deg) brightness(99%) contrast(106%)",
                            }} // jamaica
                          />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <CardTitle style={{ fontSize: 25 }} tag="p">
                            Jamaica
                          </CardTitle>
                          <p />
                          <p className="card-category">Jamaica</p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              {selectedCard === "jamaica" && (
                <div className="d-lg-none">
                  <Col className="mt-lg-5 d-md-block" sm="12">
                    <div className="pl-md-5 mt-2">
                      <h1>
                        {selectedInfo.title} <br />
                      </h1>
                      <p>{selectedInfo.description}</p>
                    </div>
                  </Col>
                </div>
              )}
              <Col className="px-2 py-2" lg="6" sm="12">
                <Card
                  className={classnames("card-stats", {
                    "upper bg-default": selectedCard === "mango",
                  })}
                  onClick={() =>
                    handleCardClick(
                      "Mango",
                      "Esta es la información de Mango.",
                      "mango"
                    )
                  }
                >
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/vaso.png")}
                            width={50}
                            style={{
                              filter:
                                "brightness(0) saturate(100%) invert(80%) sepia(80%) saturate(6214%) hue-rotate(5deg) brightness(102%) contrast(101%)",
                            }} //mango
                          />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <CardTitle tag="p">Mango</CardTitle>
                          <p />
                          <p className="card-category">Mango</p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              {selectedCard === "mango" && (
                <div className="d-lg-none">
                  <Col className="mt-lg-5 d-md-block" sm="12">
                    <div className="pl-md-5 mt-2">
                      <h1>
                        {selectedInfo.title} <br />
                      </h1>
                      <p>{selectedInfo.description}</p>
                    </div>
                  </Col>
                </div>
              )}
            </Row>
            <Row>
              <Col className="px-2 py-2" lg="6" sm="12">
                <Card
                  className={classnames("card-stats", {
                    "upper bg-default": selectedCard === "cereza",
                  })}
                  onClick={() =>
                    handleCardClick(
                      "Cereza",
                      "Esta es la información de Cereza.",
                      "cereza"
                    )
                  }
                >
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/vaso.png")}
                            width={50}
                            style={{
                              filter:
                                "brightness(0) saturate(100%) invert(17%) sepia(88%) saturate(5935%) hue-rotate(360deg) brightness(96%) contrast(108%)",
                            }} // cereza
                          />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <CardTitle tag="p">Cereza</CardTitle>
                          <p />
                          <p className="card-category">Cereza</p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              {selectedCard === "cereza" && (
                <div className="d-lg-none">
                  <Col className="mt-lg-5 d-md-block" sm="12">
                    <div className="pl-md-5 mt-2">
                      <h1>
                        {selectedInfo.title} <br />
                      </h1>
                      <p>{selectedInfo.description}</p>
                    </div>
                  </Col>
                </div>
              )}
              <Col className="px-2 py-2" lg="6" sm="12">
                <Card
                  className={classnames("card-stats", {
                    "upper bg-default": selectedCard === "maracuya",
                  })}
                  onClick={() =>
                    handleCardClick(
                      "Maracuya",
                      "Esta es la información de Maracuya.",
                      "maracuya"
                    )
                  }
                >
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <img
                            alt="..."
                            className="img-fluid"
                            src={require("assets/img/vaso.png")}
                            width={50}
                            style={{
                              filter:
                                "brightness(0) saturate(100%) invert(30%) sepia(88%) saturate(5000%) hue-rotate(30deg) brightness(200%) contrast(150%)",
                            }} // Maracuya
                          />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <CardTitle style={{ fontSize: 23 }} tag="p">
                            Maracuya
                          </CardTitle>
                          <p />
                          <p className="card-category">Maracuya</p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              {selectedCard === "maracuya" && (
                <div className="d-lg-none">
                  <Col className="mt-lg-5 d-md-block" sm="12">
                    <div className="pl-md-5 mt-2">
                      <h1>
                        {selectedInfo.title} <br />
                      </h1>
                      <p>{selectedInfo.description}</p>
                    </div>
                  </Col>
                </div>
              )}
            </Row>
          </Col>
          <Col className="d-none d-lg-block mt-lg-5 align-content-center" lg="6" md="6">
            <div className="pl-md-5">
              <h1>
                {selectedInfo.title} <br />
              </h1>
              <p>{selectedInfo.description}</p>
              <br />
              <a
                className="font-weight-bold text-info mt-5"
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  resetInfo();
                }}
              >
                Volver
                <i className="tim-icons icon-minimal-right text-info" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
