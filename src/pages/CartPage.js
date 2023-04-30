import { Container, Row, Col, ListGroup, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItemComponent from "../components/CartItemComponent";

const images = [
  "/images/img1.jpeg",
  "/images/img2.JPG",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
  "/images/img6.jpg",
  "/images/img7.png",
];

function CartPage() {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={8}>
          <h1>Shopping Cart</h1>
          <ListGroup variant="flush">
            {images.map((img, index) => (
              <CartItemComponent img={img} key={index} />
            ))}

            <Alert variant="info" className="m-3">
              Your cart is empty
            </Alert>
          </ListGroup>
        </Col>

        <Col md={4}>
          <ListGroup>
            <ListGroup.Item className="h2">
              Subtotal (2 Products)
            </ListGroup.Item>

            <ListGroup.Item>
              Total price: <span className="fw-bold">200.000 VND</span>
            </ListGroup.Item>

            <ListGroup.Item>
              <Link to="/user/cart-detail">
                <div className="d-grid">
                  <Button variant="success">Proceed to Checkout</Button>
                </div>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
