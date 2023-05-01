import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminEditUserPage() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Edit user</h1>
          <Button as={Link} to="/admin/users" className="mb-3" variant="info">
            Go back
          </Button>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="lastName" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Is admin" />
            </Form.Group>

            <Button variant="warning" type="submit">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminEditUserPage;
