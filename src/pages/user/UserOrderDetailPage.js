import { useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  Alert,
  Image,
  Button,
  ListGroup,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../service/orderService";

const images = [
  "/images/img1.jpeg",
  "/images/img2.JPG",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
  "/images/img6.jpg",
  "/images/img7.png",
];

function UserOrderDetailPage() {
  const { id: orderId } = useParams();
  const [order, setOrder] = useState({});
  const [user, setUser] = useState({});
  console.log({ user, order });

  useEffect(() => {
    getOrderById(orderId).then((res) => {
      setOrder(res);
      setUser(res.user);
    });
  }, []);
  return (
    <Container>
      <Row className="mt-3">
        <Col md={8}>
          <h1 className="mb-4">Order Details</h1>
          <Row className="mb-5">
            <Col md={6}>
              <h2>Shipping</h2>
              <div>
                <b>Name: </b>
                {`${user.firstName} ${user.lastName}`}
              </div>
              <div>
                <b>Address: </b>
                {user.city}
              </div>
              <div>
                <b>Phone: </b>
                {user.phoneNumber}
              </div>
              {order.isDelivered === true ? (
                <Alert variant="success">Delivered</Alert>
              ) : (
                <Alert variant="danger">Not delivered</Alert>
              )}
            </Col>
            <Col md={6}>
              <h2>Payment method</h2>
              <Form.Select value={order.paymentMethod}>
                <option value="4">Momo</option>
                <option value="2">Paypal</option>
                <option value="1">
                  Cash on delivery (delivery may be delayed)
                </option>
              </Form.Select>
              {order.isPaid === true ? (
                <Alert variant="success">Paid {order.paidAt}</Alert>
              ) : (
                <Alert variant="danger">Not paid yet</Alert>
              )}
            </Col>
          </Row>

          {/* Order items */}
          <h2>Order items</h2>
          <ListGroup variant="flush">
            {images.map((img, index) => (
              <ListGroup.Item className="py-3" key={index}>
                <div className="d-flex align-items-center justify-content-between">
                  <Image
                    crossOrigin="anonymous"
                    src={img}
                    width={120}
                    // height={60}
                    style={{
                      objectFit: "cover",
                      maxHeight: "180px",
                      maxWidth: "140px",
                    }}
                  />

                  <div style={{ maxWidth: "40%" }} name="description">
                    <div className="fw-bold">Product1 Lenovo</div>
                    <div>
                      description description description description
                      description description description
                    </div>
                  </div>

                  <div className="fw-bold">200.000 VND</div>

                  <div style={{ textAlign: "right" }}>
                    <Form.Select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>

                    <Button variant="secondary" className="mt-4">
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item className="fs-2">Order summary</ListGroup.Item>

            <ListGroup.Item>
              Price (after tax): <b>200.000 VND</b>
            </ListGroup.Item>

            <ListGroup.Item>
              Shipping <b>Included</b>
            </ListGroup.Item>

            <ListGroup.Item>
              Tax: <b>Included</b>
            </ListGroup.Item>

            <ListGroup.Item className="text-danger">
              Total price:
              <b> 200.000 VND</b>
            </ListGroup.Item>

            <ListGroup.Item className="d-grid">
              <Button variant="danger">
                Wait for your order. You pay on delivery
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default UserOrderDetailPage;
