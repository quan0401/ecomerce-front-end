import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Table,
  CloseButton,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const categories = [
  "Electronics",
  "Home & Kitchen",
  "Fashion",
  "Beauty & Personal Care",
  "Sports & Outdoors",
  "Toys & Games",
  "Books",
  "Automotive",
  "Grocery & Gourmet Food",
  "Baby",
  "Health & Household",
  "Pet Supplies",
  "Jewelry",
  "Office Products",
  "Tools & Home Improvement",
  "Arts, Crafts & Sewing",
  "Musical Instruments",
  "Industrial & Scientific",
  "Movies & TV",
  "Video Games",
  "Kindle Store",
  "CDs & Vinyl",
  "Digital Music",
  "Magazine Subscriptions",
  "Gift Cards",
];

function AdminEditProductPage() {
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <h1>Edit product</h1>
          <Button
            as={Link}
            to="/admin/products"
            variant="info"
            className="my-2"
          >
            Go back
          </Button>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control required as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Count in stock</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Or create new category (e.g. Computers/Laptops/Intel)
              </Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Row>
              <Col className="mb-3" md={6}>
                <Form.Label>Choose attribute</Form.Label>
                <Form.Select aria-label="Default select example">
                  {categories.map((cate, index) => (
                    <option key={index} value={index}>
                      {cate}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col className="mb-3" md={6}>
                <Form.Label>Attribute value</Form.Label>
                <Form.Select aria-label="Default select example">
                  {categories.map((cate, index) => (
                    <option key={index} value={index}>
                      {cate}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>

            <Table striped>
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Value</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Genre</td>
                  <td>movie</td>
                  <td>
                    <CloseButton />
                  </td>
                </tr>
              </tbody>
            </Table>

            <Row>
              <Col className="mb-3" md={6}>
                <Form.Group>
                  <Form.Label>New attribute name</Form.Label>
                  <Form.Control required type="text" />
                </Form.Group>
              </Col>

              <Col className="mb-3" md={6}>
                <Form.Group>
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Control required type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Images</Form.Label>
              <Row>
                <Col style={{ position: "relative" }} md={3}>
                  <Image fluid src="/images/img1.jpeg" />
                  <i
                    className="bi bi-x-circle-fill position-absolute text-danger"
                    style={{
                      top: -10,
                      left: "4px",
                      zIndex: "1",
                      cursor: "pointer",
                    }}
                  ></i>
                </Col>
                <Col style={{ position: "relative" }} md={3}>
                  <Image fluid src="/images/img1.jpeg" />
                  <i
                    className="bi bi-x-circle-fill position-absolute text-danger"
                    style={{
                      top: -10,
                      left: "4px",
                      zIndex: "1",
                      cursor: "pointer",
                    }}
                  ></i>
                </Col>
              </Row>
              <Form.Control required type="file" />
            </Form.Group>

            <div className="d-grid d-md-block">
              <Button>Create</Button>{" "}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminEditProductPage;
