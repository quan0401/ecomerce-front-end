import { Container, ListGroup, Col, Row, Button } from "react-bootstrap";

import PaginationComponent from "../../components/PaginationComponent";

import SortOptionComponent from "../../components/SortOptionComponent";

import PriceFilterComponent from "../../components/filterQueryResultOptions/PriceFilterComponent";

import RatingFilterComponent from "../../components/filterQueryResultOptions/RatingFilterComponent";

import CategoryFilterComponent from "../../components/filterQueryResultOptions/CategoryFilterComponent";

import AttributeFilterComponent from "../../components/filterQueryResultOptions/AttributeFilterComponent";

import ProductForListComponent from "../../components/ProductForListComponent";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function ProductListPageComponent({ getProductsApi, categories }) {
  const [products, setProducts] = useState([]);

  const categoryName = useParams().categoryName.replace(",", "/");

  const [categoryData, setCategoryData] = useState();

  const [selectedAttributes, setSelectedAttributes] = useState([]);

  const [rating, setRating] = useState();

  // Collect filters
  const [filters, setFilters] = useState({});

  const [showResetFilterButton, setShowResetFilterButton] = useState(false);

  const [price, setPrice] = useState(-2);

  useEffect(() => {
    if (categoryName) {
      const categoryDataFound = categories.find(
        (item) => item.name === categoryName
      );

      if (categoryDataFound) setCategoryData(categoryDataFound);
    }
  }, [categoryName, categories]);

  const filterButtonHanlder = () => {
    setShowResetFilterButton(true);
    setFilters({
      price,
      selectedAttributes,
      rating,
    });
  };

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
              <PriceFilterComponent price={price} setPrice={setPrice} />
            </ListGroup.Item>

            <ListGroup.Item className="py-3">
              <RatingFilterComponent rating={rating} setRating={setRating} />
            </ListGroup.Item>

            <ListGroup.Item className="py-3">
              <CategoryFilterComponent />
            </ListGroup.Item>

            <ListGroup.Item className="py-3">
              {categoryData && (
                <AttributeFilterComponent
                  attributes={categoryData.attributes}
                  setSelectedAttributes={setSelectedAttributes}
                />
              )}
            </ListGroup.Item>

            <ListGroup.Item className="py-3">
              <Row>
                <Button onClick={filterButtonHanlder} className="mb-2">
                  Filter
                </Button>
                {showResetFilterButton ? (
                  <Button variant="danger">Reset Filter</Button>
                ) : (
                  <></>
                )}
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          <Row xxl={3} xl={2} className="g-3">
            {products.map((product, index) => (
              <ProductForListComponent item={product} key={index} />
            ))}
            {/* {images.map((item, index) => (
              <ProductForListComponent img={item} key={index} />
            ))} */}
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
