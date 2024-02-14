import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Stack,
} from 'react-bootstrap';
import logo from '../assets/logo.svg';

export default function NavigationBar() {
  return (
    <>
      <Navbar
        id="NavigationBar"
        expand="lg"
        collapseOnSelect
        className="bg-secondary"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              height="52"
              width="auto"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Stack direction="horizontal" gap={5}>
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
              </Stack>
            </Nav>
          </Navbar.Collapse>

          <Button
            href="https://wa.me/6282138754680"
            target="_blank"
            rel="noreferrer"
            variant="primary"
          >
            Get in touch
          </Button>
        </Container>
      </Navbar>
    </>
  );
}
