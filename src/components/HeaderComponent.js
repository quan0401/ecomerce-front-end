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

import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { logoutState } from "../redux/actions/userActions";

import { useEffect } from "react";

import { getCategoriesAction } from "../redux/actions/categoryActions";

function HeaderComponent() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const callbackLogout = () => {
    navigate("/login");
  };

  const { userInfo } = useSelector((state) => state.userRegisterLogin);

  const { itemsCount } = useSelector((state) => state.cart);

  const { categories } = useSelector((state) => state.category);

  // Good practive to put it in the dependency
  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          Online-Shop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                {categories.map((category, index) => (
                  <Dropdown.Item key={index}>{category.name}</Dropdown.Item>
                ))}
              </DropdownButton>

              <Form.Control type="text" placeholder="Normal text" />

              <Button variant="warning">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="/cart">
              <Badge pill bg="danger">
                {itemsCount !== 0 && itemsCount}
              </Badge>

              <i className="bi bi-cart"></i>

              <span className="ms-1">Cart</span>
            </Nav.Link>
            {userInfo.isAdmin ? (
              <>
                <Nav.Link as={NavLink} to="/admin/my-orders">
                  Admin
                  <span className="position-absolute top-2 start-90 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </Nav.Link>

                <NavDropdown
                  title={userInfo.firstName + " " + userInfo.lastName}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch(logoutState(callbackLogout));
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : !userInfo.isAdmin && userInfo.firstName ? (
              <>
                <NavDropdown
                  title={userInfo.firstName + " " + userInfo.lastName}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    eventKey="/user/my-orders"
                    to="/user/my-orders"
                  >
                    My orders
                  </NavDropdown.Item>

                  <NavDropdown.Item as={NavLink} to="/user/">
                    Profile
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      dispatch(logoutState(callbackLogout));
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>

                <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>

          {/* </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
