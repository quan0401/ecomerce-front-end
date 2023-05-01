import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";

function UserProfilePage() {
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
            <Form.Label as="h1">User Profile</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label className="fw-bold">First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your fist name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label className="fw-bold">Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your last name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email address</Form.Label>
              <Form.Control
                disabled
                type="email"
                placeholder="Enter email address"
                name="email"
                value="nope@gmail.com"
              />

              <Form.Text type="muted">
                If you want the change email, remove account and create new one
                with new email address
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label className="fw-bold">Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phone"
                defaultValue=""
                minLength={8}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="country">
              <Form.Label className="fw-bold">Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your country"
                name="country"
                defaultValue=""
                minLength={8}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city  ">
              <Form.Label className="fw-bold">City </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city  "
                name="city  "
                defaultValue=""
                minLength={8}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="zipCode">
              <Form.Label className="fw-bold">Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your zipCode"
                name="zipCode"
                defaultValue=""
                minLength={8}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                minLength={8}
              />
              <Form.Control.Feedback type="invalid">
                Please enter password.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
              <Form.Label className="fw-bold">Repeat Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter repeat password"
                name="repeatPassword"
                minLength={8}
              />
              <Form.Control.Feedback type="invalid">
                Please enter repeat password.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="success" type="submit">
              Update
            </Button>
          </Form>

          <Alert variant="info">User updated</Alert>

          <Alert variant="danger">User with that email already exists!</Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfilePage;
