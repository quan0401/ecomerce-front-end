import { Container, ListGroup, Col, Row, Button } from "react-bootstrap";
import PaginationComponent from "../../components/PaginationComponent";
import SortOptionComponent from "../../components/SortOptionComponent";
import PriceFilterComponent from "../../components/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../../components/filterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "../../components/filterQueryResultOptions/CategoryFilterComponent";
import AttributeFilterComponent from "../../components/filterQueryResultOptions/AttributeFilterComponent";
import ProductForListComponent from "../../components/ProductForListComponent";
import { useEffect, useState } from "react";

const images = [
  "images/img1.jpeg",
  "images/img2.JPG",
  "images/img3.jpeg",
  "images/img4.jpeg",
  "images/img6.jpg",
  "images/img7.png",
];

function ProductListPageComponent({ getProductsApi }) {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    getProductsApi().then((res) => {
      setProducts(res.products);
    });
  }, []);
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item className="py-3">
              <SortOptionComponent />
            </ListGroup.Item>

            <ListGroup.Item className="py-3">
              <PriceFilterComponent />
            </ListGroup.Item>

            <ListGroup.Item className="py-3">
              <RatingFilterComponent />
            </ListGroup.Item>

            <ListGroup.Item className="py-3">
              <CategoryFilterComponent />
            </ListGroup.Item>

            <ListGroup.Item className="py-3">
              <AttributeFilterComponent />
            </ListGroup.Item>

            <ListGroup.Item className="py-3">
              <Row>
                <Button className="mb-2">Filter</Button>
                <Button variant="danger">Reset Filter</Button>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          <Row xxl={3} xl={2} className="g-3">
            {images.map((item, index) => (
              <ProductForListComponent img={item} key={index} />
            ))}
          </Row>
          <div className="mt-3 d-flex justify-content-center">
            <PaginationComponent />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductListPageComponent;
