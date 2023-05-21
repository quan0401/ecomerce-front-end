import CategoryCardComponent from "../../components/CategoryCardComponent";
import ProductCarouselComponent from "../../components/ProductCarouselComponent";

import { Container, Row } from "react-bootstrap";

function HomePageComponent({ categories }) {
  return (
    <>
      <ProductCarouselComponent />
      <Container className="mt-4">
        <Row xs={1} md={2} className="g-3">
          {categories &&
            categories.map((category, index) => (
              <CategoryCardComponent
                key={index}
                category={category}
                index={index}
              />
            ))}
        </Row>
      </Container>
    </>
  );
}

export default HomePageComponent;
