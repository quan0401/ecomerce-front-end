import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function ProductForListComponent({ id, img }) {
  return (
    <Card>
      <Row>
        <Col xl={12} lg={5}>
          <Card.Img
            style={{ height: "300px", objectFit: "cover" }}
            variant="top"
            src={img}
          />
        </Col>

        <Col xl={12} lg={7}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Rating initialValue={5} className="mb-3" readonly size={24} />
            <span style={{ fontSize: "20px" }}>(1)</span>
            <br />
            <Card.Text className="fw-bold size fs-4">120.000 VND</Card.Text>
            <Link to="/product-detail/1">
              <Button variant="danger">See Product</Button>
            </Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductForListComponent;
