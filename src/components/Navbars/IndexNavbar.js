import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 249 ||
        document.body.scrollTop > 249
      ) {
        setNavbarColor("navbar-scroll");
      } else if (
        document.documentElement.scrollTop < 250 ||
        document.body.scrollTop < 250
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Ebuero.ag Website"
          >
            <img className="ebuero-logo" alt="..." src={require("assets/img/sales-and-service-logo.png")} />
          </NavbarBrand>                                          
        </div>
        <Row>
            <Col md="12">
              <Navbar className="bg-transparent" expand="lg">
                <NavbarBrand href="#" onClick={e => e.preventDefault()}>
                  
                </NavbarBrand>
                <button
                  aria-controls="navbarSupportedContent"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-menu"
                  data-toggle="collapse"
                  id="navbar-menu"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-menu">
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href="#" onClick={e => e.preventDefault()}>
                        HOME
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#"
                        id="dropdownMenuButton"
                        nav
                        onClick={e => e.preventDefault()}
                        role="button"
                      >
                        SERVICES
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                        <DropdownItem
                          href="#"
                          onClick={e => e.preventDefault()}
                        >
                          Office Services
                        </DropdownItem>
                        <DropdownItem
                          href="#"
                          onClick={e => e.preventDefault()}
                        >
                          Telephone Services
                        </DropdownItem>
                        <DropdownItem
                          href="#"
                          onClick={e => e.preventDefault()}
                        >
                          Business Center
                        </DropdownItem>
                        <DropdownItem
                          href="#"
                          onClick={e => e.preventDefault()}
                        >
                          Business Address
                        </DropdownItem> 
                        <DropdownItem
                          href="#"
                          onClick={e => e.preventDefault()}
                        >
                          Rent Office
                        </DropdownItem>   
                        <DropdownItem
                          href="#"
                          onClick={e => e.preventDefault()}
                        >
                          Conference/Seminar Rooms
                        </DropdownItem>                    
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                      <NavLink href="#" onClick={e => e.preventDefault()}>
                        Applications
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" onClick={e => e.preventDefault()}>
                        Book
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" onClick={e => e.preventDefault()}>
                        Mobile App
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" onClick={e => e.preventDefault()}>
                        ABOUT US
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#"
                        id="dropdownMenuButton"
                        nav
                        onClick={e => e.preventDefault()}
                        role="button"
                      >
                        CONTACT US
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                        <DropdownItem
                          href="#"
                          onClick={e => e.preventDefault()}
                        >
                          Send us a message!
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#"
                          onClick={e => e.preventDefault()}
                        >
                          Phone: 0800 5040 4442 28
                        </DropdownItem>
                        <DropdownItem
                          href="#"
                          onClick={e => e.preventDefault()}
                        >
                          Email: info@ebuero.ag
                        </DropdownItem>
                        <DropdownItem
                          href="#"
                          onClick={e => e.preventDefault()}
                        >
                          Ebuero Blog
                        </DropdownItem>                        
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                      <Button
                        className="btn-round"
                        color="danger"
                        href="#"
                        target="_blank"
                      >
                        Login
                      </Button>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Navbar>
            </Col>            
          </Row>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
