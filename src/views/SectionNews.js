import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionNews() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <div className="section mg-bt-70">
        <Container>
          <Row>
            <Col md="12">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        NEWS
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        OFFERS
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        TIPS
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "4" ? "active" : ""}
                        onClick={() => {
                          toggle("4");
                        }}
                      >
                        TIPS
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                  <p>
                    Sample text goes here. Sample text goes here. Sample text goes here.
                    Sample text goes here. Sample text goes here. Sample text goes here.
                    Sample text goes here. Sample text goes here. Sample text goes here.
                    Sample text goes here. Sample text goes here.
                  </p>
                </TabPane>
                <TabPane tabId="2">
                  <p>Here is your offers.</p>
                </TabPane>
                <TabPane tabId="3">
                  <p>Here are your tips.</p>
                </TabPane>
                <TabPane tabId="4">
                  <p>Here are your Careers.</p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
      </div>{" "}
    </>
  );
}

export default SectionNews;
