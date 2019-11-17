import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";


function SectionTestimonial() {
  return (
    <>
      <Container className="section tim-container">
        <div className="title text-center">
          <h3>Testimonials</h3>
        </div>
        <div id="typography">
          <Row>            
            <div className="typography-line">              
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam.
                </p>
                <br />
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default SectionTestimonial;
