import React from "react";

// reactstrap components
import {
  Button,
  Label,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function SectionServices() {  
  return (
    <>
    <div className="section text-center">
        <Container>
            
        <Row>
            <Col className="ml-auto mr-auto" md="10">
                <h2 className="text-center mr-bt-30">What we offer!</h2>
            </Col>
            <Col md="3">
            <div className="info">
                <div className="icon icon-info">
                <i className="nc-icon nc-album-2" />
                </div>
                <div className="description">
                <h4 className="info-title">Office/Telephone Services</h4>
                <p className="description">
                    Sample test goes here. Sample test goes here. Sample test goes here.
                    Sample test goes here. Sample test goes here. 
                </p>
                <Button className="btn-link" color="info" href="#pablo">
                    See more
                </Button>
                </div>
            </div>
            </Col>
            <Col md="3">
            <div className="info">
                <div className="icon icon-info">
                <i className="nc-icon nc-bulb-63" />
                </div>
                <div className="description">
                <h4 className="info-title">Business Center and Address</h4>
                <p>
                Sample test goes here. Sample test goes here. Sample test goes here.
                    Sample test goes here. 
                </p>
                <Button className="btn-link" color="info" href="#pablo">
                    See more
                </Button>
                </div>
            </div>
            </Col>
            <Col md="3">
            <div className="info">
                <div className="icon icon-info">
                <i className="nc-icon nc-chart-bar-32" />
                </div>
                <div className="description">
                <h4 className="info-title">Rent Comfortable Offices and Rooms</h4>
                <p>
                    Sample test goes here. Sample test goes here. Sample test goes here.
                    Sample test goes here. Sample test goes here. Sample test goes here. 
                </p>
                <Button className="btn-link" color="info" href="#pablo">
                    See more
                </Button>
                </div>
            </div>
            </Col>
            <Col md="3">
            <div className="info">
                <div className="icon icon-info">
                <i className="nc-icon nc-sun-fog-29" />
                </div>
                <div className="description">
                <h4 className="info-title">Conference and Seminar Offices</h4>
                <p>
                Sample test goes here. Sample test goes here. Sample test goes here. 
                Sample test goes here. Sample test goes here. Sample test goes here. 
                </p>
                <Button className="btn-link" color="info" href="#pablo">
                    See more
                </Button>
                </div>
            </div>
            </Col>
        </Row>
    </Container>
</div>
</>
  );
}

export default SectionServices;
