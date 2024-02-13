import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from '../assets/logo.svg';

export default function NavigationBar() {
  return (
    <>
      <Navbar
        id="NavigationBar"
        className="bg-secondary d-flex justify-content-center"
      >
        <Container className="m-0">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              height="52"
              width="auto"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse
            className="d-flex justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav className="d-flex">
              <Nav.Link className="nav-item active" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-item" href="#about-us">
                About Us
              </Nav.Link>
              <NavDropdown
                className="nav-item text"
                title="Services"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Web Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Mobile Development
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  System Development
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-item" href="#link">
                Blog
              </Nav.Link>
              <Nav.Link className="nav-item" href="#link">
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button
            href="https://wa.me/6282138754680"
            target="_blank"
            rel="noreferrer"
            variant="primary"
          >
            Get in touch
          </Button>{' '}
        </Container>
      </Navbar>
    </>
  );
}
