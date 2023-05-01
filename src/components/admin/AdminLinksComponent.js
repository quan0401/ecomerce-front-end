import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AdminLinksComponent() {
  return (
    <Navbar>
      <Nav
        defaultActiveKey="/home"
        className="flex-column bg-light"
        variant="light"
        style={{ width: "100%" }}
      >
        <LinkContainer to="/admin/my-orders">
          <Nav.Link>Orders</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/products">
          <Nav.Link>Products</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/users">
          <Nav.Link>User List</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/chats">
          <Nav.Link>Chats</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/admin/analytics">
          <Nav.Link>Analytics</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/logout">
          <Nav.Link>Logout</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default AdminLinksComponent;
