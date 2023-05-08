import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";
import { Rating } from "react-simple-star-rating";
import { useEffect } from "react";
import ImageZoom from "js-image-zoom";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const images = ["/images/img1.jpeg", "/images/img2.JPG", "/images/img3.jpeg"];

function ProductDetailPage() {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart());
  };

  const option = {
    width: 400,
    zoomWidth: 500,
    offset: { vertical: 0, horizontal: 10 },
  };

  useEffect(() => {
    images.forEach((item, index) => {
      new ImageZoom(document.getElementById("img-" + index), option);
    });
  });
  return (
    <>
      <Container>
        <AddedToCartMessageComponent />

        <Row>
          <Col style={{ zIndex: 1 }} md={4} className="p-4">
            {images.map((img, index) => (
              <div key={index} id={"img-" + index}>
                <Image
                  crossOrigin="anonymous"
                  className="mb-3"
                  src={img}
                  rounded
                  fluid
                />
              </div>
            ))}
          </Col>
          <Col md={8}>
            <Row>
              <Col md={8}>
                <ListGroup variant="flush">
                  <ListGroup.Item as={"h1"}>
                    Macbook pro 16inch m1 max 32gb 1tb
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Rating
                      size={24}
                      initialValue={5}
                      /* Available Props */
                    />
                    <span style={{ marginTop: "-12px" }}>(5)</span>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Price: <span className="fw-bold">200.000 VND</span>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Porta ac consectetur ac Porta ac consectetur ac Porta ac
                    consectetur ac Porta ac consectetur ac Porta ac consectetur
                    ac Porta ac consectetur ac Porta ac consectetur ac Porta ac
                    consectetur ac fkajfjkl;da;jfkajkf;;jasdklfjfljadsfjasf.
                  </ListGroup.Item>
                </ListGroup>
                <hr />
              </Col>
              <Col md={4}>
                <ListGroup>
                  <ListGroup.Item>
                    Status:<span className="fw-bold"> In stock</span>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Price: <span className="fw-bold">200.000 VND</span>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Quantity:{" "}
                    <Form.Select
                      className="my-2"
                      aria-label="Default select example"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <div className="d-grid gap-2">
                      <Button
                        onClick={handleAddToCart}
                        variant="success"
                        size="lg"
                      >
                        Add to cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            {/* Reviews */}
            <ListGroup variant="flush">
              <div className="h1">Reviews</div>
              {Array.from({ length: 5 }).map((item, index) => (
                <ListGroup.Item key={index}>
                  <div className="fw-bold">Username</div>
                  <Rating initialValue={4} size={20} />
                  <div>12/2/2020</div>
                  <div>
                    Porta ac consectetur ac Porta ac consectetur ac Porta ac
                    consectetur ac Porta ac consectetur ac Porta ac consectetur
                    ac P
                  </div>
                </ListGroup.Item>
              ))}

              <ListGroup.Item>
                <Form>
                  <Alert variant="danger">Login to write a review</Alert>
                  <Form.Label className="fw-bold">Write a review</Form.Label>
                  <Form.Control as="textarea" rows={3} />

                  <Form.Select
                    className="my-2"
                    aria-label="Default select example"
                  >
                    <option>Your rating</option>
                    <option value="5">5 (very good)</option>
                    <option value="4">4 (good)</option>
                    <option value="3">3 (average)</option>
                    <option value="2">2 (bad)</option>
                    <option value="1">1 (awful)</option>
                  </Form.Select>
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </Form>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetailPage;
