import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "./style.css";
import Logo from "./assets/person.png";

class Content extends React.Component {
  render() {
    return (
      <div>
        <div className="div-bg-1">
          <Container>
            <Row className="row-fx-1">
              <Col className="text-fx-1 col-fx-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                <Button className="button-fx-1">HIRE ME</Button>
              </Col>
              <Col className="col-fx-2">
                <img className="img-fx-1" src={Logo} alt="logo..."></img>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="div-bg-1">
          <Row className="row-fx-1">
            <Col className="text-fx-1 col-fx-2">
              <span className="rectangle-fx">10+ PROJECTS DONE</span>
            </Col>
            <Col className="text-fx-1 col-fx-2">
              <span className="rectangle-fx">10+ PROJECTS DONE</span>
            </Col>
            <Col className="text-fx-1 col-fx-2">
              <span className="rectangle-fx">10+ PROJECTS DONE</span>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Content;
