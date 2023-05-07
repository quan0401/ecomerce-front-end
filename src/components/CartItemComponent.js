import { Form, ListGroup, Button, Image, Row, Col } from "react-bootstrap";

function CartItemComponent({ img, item, disabled }) {
  if (img === undefined) {
    img = "/images/img1.jpeg";
  }
  return (
    <ListGroup.Item className="py-4">
      <div className="d-md-flex justify-content-around align-items-center">
        <Row>
          <Col md={3}>
            <div>
              <Image
                crossOrigin="anonymous"
                src={img}
                fluid
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>
          <Col md={9}>
            <div className="mt-3 mt-md-0">
              Name: <b>{item.name}</b>{" "}
            </div>
            <div className="mt-3">
              Price: <b>{item.price} $</b>
            </div>
            <Form.Select
              disabled={disabled}
              className="mt-3"
              aria-label="Default select example"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
            <div className="text-secondary mt-3">{item.count} in stock</div>
            {/* Trash Button */}
            <Button
              disabled={disabled}
              className="mt-3"
              variant="secondary"
              onClick={() => window.confirm("Are you sure?")}
            >
              <i className="text-white bi bi-trash-fill"></i>
            </Button>
          </Col>
        </Row>
      </div>
    </ListGroup.Item>
  );
}

export default CartItemComponent;
