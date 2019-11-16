import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function SectionGetRegistered() {  
  return (
    <>
      <div className="section section-buttons">
        <Container>
            <Row>
              <Col md="3">
                <h3 className="get-registered">Get Registered!</h3>
              </Col>
              <Col md="6">
                <InputGroup>
                  <Input placeholder="Email" type="email" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i aria-hidden={true} className="fa fa-group" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
              <Col md="3">
                <Button
                    className="btn-round mr-1"
                    color="danger"
                    outline
                    type="button"
                  >
                  Register
                </Button>
              </Col>              
            </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionGetRegistered;
