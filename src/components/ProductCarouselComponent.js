import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";

function ProductCarouselComponent() {
  return (
    <Carousel style={{ overflow: "hidden" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ objectFit: "cover", height: "300px" }}
          src="images/img1.jpeg"
          alt="First slide"
        />

        <LinkContainer to="/product-detail" style={{ cursor: "pointer" }}>
          <Carousel.Caption>
            <h3>Best Laptop</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </LinkContainer>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ objectFit: "cover", height: "300px" }}
          src="images/img2.JPG"
          alt="Second slide"
        />

        <LinkContainer to="/product-detail" style={{ cursor: "pointer" }}>
          <Carousel.Caption>
            <h3>Best Laptop</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </LinkContainer>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ objectFit: "cover", height: "300px" }}
          src="images/img3.jpeg"
          alt="Third slide"
        />

        <LinkContainer to="/product-detail" style={{ cursor: "pointer" }}>
          <Carousel.Caption>
            <h3>Best Laptop</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </LinkContainer>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarouselComponent;
