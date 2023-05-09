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
import { registerUser } from "../service/userService";

function RegisterPage() {
  const [validated, setValidated] = useState(false);
  const [resgisterStatus, setRegisterStatus] = useState({ loading: false });

  const handleSubmit = (e) => {
    setRegisterStatus((prev) => ({ ...prev, loading: true }));
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget.elements;
    const {
      firstName: { value: firstName },
      lastName: { value: lastName },
      email: { value: email },
      password: { value: password },
      repeatPassword: { value: repeatPassword },
    } = form;

    if (
      e.currentTarget.checkValidity() === true &&
      firstName &&
      lastName &&
      email &&
      password &&
      repeatPassword === password
    ) {
      registerUser({
        firstName,
        lastName,
        email,
        password,
      }).then((res) => {
        setRegisterStatus((prev) => ({ ...prev, loading: false }));
        console.log(res);
      });
    } else setRegisterStatus((prev) => ({ ...prev, loading: false }));
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-3">
        <Col md={6}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter first name"
                name="firstName"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your fist name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter last name"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your last name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
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

            <Form.Group className="mb-3">
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
              <Form.Text>Password should have 8 characters</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Repeat Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter repeat password"
                name="repeatPassword"
                minLength={8}
              />
              <Form.Control.Feedback type="invalid">
                Please enter repeat password.
              </Form.Control.Feedback>
              <Form.Text>Password should have 8 characters</Form.Text>
            </Form.Group>

            <Row>
              <Col>
                <p>
                  Do you have an account already? <Link to="/login">Login</Link>
                </p>
              </Col>
            </Row>
            <Button type="submit">
              Submit
              {resgisterStatus?.loading === true ? (
                <Spinner animation="border" role="status" size="sm" />
              ) : (
                ""
              )}
            </Button>
          </Form>
          <Alert>User created</Alert>

          <Alert variant="danger">User with that email already exists!</Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
