import { Container, ListGroup, Col, Row, Button } from "react-bootstrap";

import PaginationComponent from "../../components/PaginationComponent";

import SortOptionComponent from "../../components/SortOptionComponent";

import PriceFilterComponent from "../../components/filterQueryResultOptions/PriceFilterComponent";

import RatingFilterComponent from "../../components/filterQueryResultOptions/RatingFilterComponent";

import CategoryFilterComponent from "../../components/filterQueryResultOptions/CategoryFilterComponent";

import AttributeFilterComponent from "../../components/filterQueryResultOptions/AttributeFilterComponent";

import ProductForListComponent from "../../components/ProductForListComponent";

import { useEffect, useState } from "react";

import { useParams, useLocation } from "react-router-dom";

function ProductListPageComponent({ getProductsApi, categories }) {
  const [products, setProducts] = useState([]);
  const currentPath = useLocation().pathname.split("/");

  let categoryName = useParams().categoryName || "";
  if (currentPath.indexOf("category") !== -1) {
    categoryName = categoryName.replace(",", "/");
  }

  const [attributesFromCats, setAttributesFromCats] = useState([]); // Collect attributes to show on webpage

  const [selectedAttributes, setSelectedAttributes] = useState([]);

  const [rating, setRating] = useState({});

  const [selectedCategories, setSelectedCategories] = useState([]);

  // Collect filters
  const [filters, setFilters] = useState({});

  const [showResetFilterButton, setShowResetFilterButton] = useState(false);

  const [price, setPrice] = useState(-2);

  const [sortOption, setSortOption] = useState("");

  const [pageNum, setPageNum] = useState(null);
  const [paginationLinksNumber, setPaginationLinksNumber] = useState(null);

  const pageNumParam = useParams().pageNumParam || 1;
  const searchQuery = useParams().searchQuery || "";

  const filterButtonHanlder = () => {
    setShowResetFilterButton(true);
    setFilters({
      price: +price,
      selectedAttributes,
      rating,
      selectedCategories,
    });
  };

  useEffect(() => {
    if (categoryName && selectedCategories.length === 0) {
      const categoryDataFound = categories.find(
        (item) => item.name === categoryName
      );
      if (categoryDataFound)
        setAttributesFromCats(categoryDataFound.attributes);
    } else if (selectedCategories.length > 0) {
      let attributesData = [];
      selectedCategories.forEach((selected) => {
        categories.forEach((cate) => {
          if (cate.name === selected) {
            attributesData = [...attributesData, ...cate.attributes];
          }
        });
      });
      setAttributesFromCats(attributesData);
    } else {
      setAttributesFromCats([]);
    }
  }, [categoryName, categories, selectedCategories]);

  useEffect(() => {
    getProductsApi()
      .then((res) => {
        setPaginationLinksNumber(res.paginationLinksNumber);
        setPageNum(res.pageNum);
        setProducts(res.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filters, sortOption, selectedCategories]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item className="py-3">
              <SortOptionComponent setSortOption={setSortOption} />
            </ListGroup.Item>

            <ListGroup.Item className="py-3">
              <PriceFilterComponent price={price} setPrice={setPrice} />
            </ListGroup.Item>

            <ListGroup.Item className="py-3">
              <RatingFilterComponent rating={rating} setRating={setRating} />
            </ListGroup.Item>
            {currentPath.indexOf("category") === -1 && (
              <ListGroup.Item className="py-3">
                <CategoryFilterComponent
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                />
              </ListGroup.Item>
            )}

            <ListGroup.Item className="py-3">
              {attributesFromCats && (
                <AttributeFilterComponent
                  attributes={attributesFromCats}
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
            <PaginationComponent
              pageNumParam={pageNumParam}
              searchQuery={searchQuery}
              categoryName={categoryName}
              pageNum={pageNum}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductListPageComponent;
