import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-3">
        <Col md={6}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Label className="mb-3" as="h1">
              Login
            </Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email address"
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter password"
                name="password"
                minLength={8}
              />
              <Form.Control.Feedback type="invalid">
                Please enter password.
              </Form.Control.Feedback>

              <Form.Check
                className="mt-3"
                label="Do not logout"
                type="checkbox"
                name="doNotLogOut"
              />
            </Form.Group>

            <Row>
              <Col>
                <p>
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </Col>
            </Row>
            <Button type="submit">
              Submit
              <Spinner animation="border" role="status" size="sm" />
            </Button>
          </Form>
          <Alert>User created</Alert>

          <Alert variant="danger">Wrong credentials</Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
