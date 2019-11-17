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

function SectionAboutus() {  
  return (
    <>
    <div className="section text-center">
        <Container>
        <Row>
            <Col className="ml-auto mr-auto" md="10">
                <h2 className="text-center mr-bt-30">About us</h2>
            </Col>
            <Col md="4">
                <Card className="card-profile card-plain">
                    <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                        alt="..."
                        src={require("assets/img/default-avatar.png")}
                        />
                    </a>
                    </div>
                    <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                        <CardTitle tag="h4">John Doe</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                        </div>
                    </a>
                    <p className="card-description text-center">
                        Sample text goes here. Sample text goes here.
                        Sample text goes here. Sample text goes here.
                        Sample text goes here. Sample text goes here.
                        Sample text goes here.
                    </p>
                    </CardBody>
                    <CardFooter className="text-center">
                    <Button
                        className="icon icon-info"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fa fa-twitter" />
                    </Button>
                    <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fa fa-linkedin" />
                    </Button>
                    </CardFooter>
                </Card>
            </Col>
            <Col md="4">
                <Card className="card-profile card-plain">
                    <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                        alt="..."
                        src={require("assets/img/default-avatar.png")}
                        />
                    </a>
                    </div>
                    <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                        <CardTitle tag="h4">Janit Doe</CardTitle>
                        <h6 className="card-category">Designer</h6>
                        </div>
                    </a>
                    <p className="card-description text-center">
                        Sample text goes here. Sample text goes here.
                        Sample text goes here. Sample text goes here.
                        Sample text goes here. Sample text goes here.
                        Sample text goes here.
                    </p>
                    </CardBody>
                    <CardFooter className="text-center">
                        <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <i className="fa fa-twitter" />
                        </Button>
                        <Button
                            className="btn-just-icon btn-neutral ml-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <i className="fa fa-google-plus" />
                        </Button>
                        <Button
                            className="btn-just-icon btn-neutral ml-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <i className="fa fa-linkedin" />
                        </Button>
                    </CardFooter>
                </Card>
            </Col>
            <Col md="4">
                <Card className="card-profile card-plain">
                    <div className="card-avatar">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                            alt="..."
                            src={require("assets/img/default-avatar.png")}
                            />
                        </a>
                    </div>
                    <CardBody>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                            <CardTitle tag="h4">Robert Deniro</CardTitle>
                            <h6 className="card-category">Developer</h6>
                            </div>
                        </a>
                        <p className="card-description text-center">
                            Sample text goes here. Sample text goes here.
                            Sample text goes here. Sample text goes here.
                            Sample text goes here. Sample text goes here.
                            Sample text goes here.
                        </p>
                    </CardBody>
                    <CardFooter className="text-center">
                        <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <i className="fa fa-twitter" />
                        </Button>
                        <Button
                            className="btn-just-icon btn-neutral ml-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <i className="fa fa-google-plus" />
                        </Button>
                        <Button
                            className="btn-just-icon btn-neutral ml-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            <i className="fa fa-linkedin" />
                        </Button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
        </Container>
    </div>
</>
  );
}

export default SectionAboutus;
