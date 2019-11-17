import React from "react";

import {
    Button,
    Card,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";


function IndexFooter() {
  return (
    <>
        <footer className="section footer footer-black footer-white">
            <Container>
            <Row>
                <Col md="4">
                <Card className="card-register">
                    <h3 className="title mx-auto">Welcome</h3>
                    <div className="social-line text-center">
                    <Button
                        className="btn-neutral btn-just-icon mt-0"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fab fa-facebook-square" />
                    </Button>
                    <Button
                        className="btn-neutral btn-just-icon mt-0 ml-1"
                        color="google"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fab fa-google-plus" />
                    </Button>
                    <Button
                        className="btn-neutral btn-just-icon mt-0 ml-1"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fab fa-twitter" />
                    </Button>
                    </div>
                    <Form className="register-form">
                    <label>Email</label>
                    <InputGroup className="form-group-no-border">
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email" />
                    </InputGroup>
                    <label>Password</label>
                    <InputGroup className="form-group-no-border">
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Password" type="password" />
                    </InputGroup>
                    <Button
                        block
                        className="btn-round"
                        color="danger"
                        type="button"
                    >
                        Register
                    </Button>
                    </Form>
                    <div className="forgot">
                    <Button
                        className="btn-link"
                        color="danger"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        Forgot password?
                    </Button>
                    </div>
                </Card>
                <div className="col text-center">
                    <Button
                    className="btn-round"
                    outline
                    color="neutral"
                    href="/register-page"
                    size="lg"
                    target="_blank"
                    >
                    View Register Page
                    </Button>
                </div>
                </Col>
                <Col className="text-center" md="5">
                <Row>
                    <Col lg="12" md="12">
                    <h2 className="title">About us</h2>
                    <br />
                    <p className="description">
                        Office services solve one of the biggest and yet misunderstood problems of small and medium-sized companies: potential accessibility misses potential new customers and existing customers are annoyed by it. Even in the digital age, the telephone continues to be the tool of choice for around 60% of customers when it comes to contacting them. However, 63% of callers do not leave a message on an answering machine and try it on the next company instead. A professional office service is a real competitive advantage.

                        The ebuero office service and telephone service provides the solution. Unnoticed for your callers, using a simple call diversion , our professional secretaries take calls in your company name. When your office service processes the incoming calls, you can always decide for yourself at the push of a button.
                    </p>
                    <br />
                    <Button
                        className="btn-round ml-1"
                        color="danger"
                        href="https://ebuero.ag/?ref=1234"
                        outline
                        target="_blank"
                    >
                        Read More
                    </Button>
                    </Col>
                </Row>
                </Col>
                <Col md="3">
                <Row className="justify-content-md-center sharing-area text-center">
                    <Col className="text-center" lg="10" md="12">
                    <h3>Support us by sharing!</h3>
                    </Col>
                    <Col className="text-center" lg="10" md="12">
                    <Button
                        className="twitter-sharrre btn-round"
                        color="twitter-bg"
                        href="#"
                        id="tooltip3373767"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fab fa-twitter" /> Twitter
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip3373767">
                        Tweet!
                    </UncontrolledTooltip>
                    <Button
                        className="linkedin-sharrre btn-round  ml-2"
                        color="google-bg"
                        href="#"
                        id="tooltip840791273"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fab fa-google-plus" /> Google
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip840791273">
                        Share!
                    </UncontrolledTooltip>
                    <Button
                        className="facebook-sharrre btn-round ml-2"
                        color="facebook-bg"
                        href="#pablo"
                        id="tooltip68961360"
                        onClick={e => e.preventDefault()}
                    >
                        <i className="fab fa-facebook-square" /> Facebook
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip68961360">
                        Share!
                    </UncontrolledTooltip>
                    <Button
                        className="sharrre btn-round ml-2"
                        color="github-bg"
                        href="https://github.com/creativetimofficial/paper-kit-react?ref=creativetim"
                        target="_blank"
                        id="tooltip864353654"
                    >
                        <i className="fab fa-github" /> Star
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip864353654">
                        Star on Github
                    </UncontrolledTooltip>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row>
                <nav className="footer-nav">
                    <ul>
                    <li>
                        <a
                        href="https://www.ebuero.ag"
                        target="_blank"
                        >
                        Ebuero
                        </a>
                    </li>
                    <li>
                        <a
                        href="http://blog.ebuero.ag"
                        target="_blank"
                        >
                        Blog
                        </a>
                    </li>
                    <li>
                        <a
                        href="https://www.ebuero.ag/license"
                        target="_blank"
                        >
                        Licenses
                        </a>
                    </li>
                    </ul>
                </nav>
                <div className="credits ml-auto">
                    <span className="copyright">
                    © {new Date().getFullYear()}, Developed using{" ReactJS"} by Nathnael Getahun
                    </span>
                </div>
            </Row>
            </Container>
        </footer>
    </>
  );
}

export default IndexFooter;