import {
  Badge,
  Form,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  DropdownButton,
  Dropdown,
  InputGroup,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          Best Online-Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>Cars</Dropdown.Item>
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Normal text" />
              <Button variant="warning">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="/admin/my-orders">
              Admin
              <span className="position-absolute top-2 start-90 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>

            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>

            <Nav.Link as={NavLink} to="/cart">
              <Badge pill bg="danger">
                2
              </Badge>
              <i className="bi bi-cart"></i>
              <span className="ms-1">Cart</span>
            </Nav.Link>

            <NavDropdown title="User Name" id="collasible-nav-dropdown">
              <NavDropdown.Item
                as={NavLink}
                eventKey="/user/my-orders"
                to="/user/my-orders"
              >
                My orders
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} eventKey="/user" to="/user">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} eventKey="/logout" to="/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
