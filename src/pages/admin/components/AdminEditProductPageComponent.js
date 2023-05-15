import { useState } from "react";

import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Table,
  Image,
} from "react-bootstrap";

import { Link } from "react-router-dom";

function AdminEditProductPageComponent({
  categories,
  product,
  updateProductApi,
  reduxDispatch,
  createNewAttrForCate,
}) {
  let { attributes: productAttributes, category: productCategory } = product;

  const [productAttributesTable, setProductAttributesTable] = useState([
    ...product.attributes,
  ]);

  // Attribute and value
  const [previousSelectedCategory, setPreviousSelectedCategory] =
    useState(productCategory);

  const [selectedCategory, setSelectedCategory] = useState(productCategory);

  const hightLevelCategoryOfEditedProduct = categories.filter((cate) => {
    return cate.name.split("/")[0] === selectedCategory.split("/")[0];
  });

  let attributesOfEditedProduct = hightLevelCategoryOfEditedProduct.reduce(
    (acc, currentValue) => {
      const currentList = [...acc, ...currentValue.attributes];

      return currentList;
    },
    []
  );

  // check if the category changed so that the selectedAttributeKey change too
  const [selectedAttributeKey, setSelectedAttributeKey] = useState(
    attributesOfEditedProduct[0]?.key
  );

  // check changed to and set new key and value
  if (previousSelectedCategory !== selectedCategory) {
    setSelectedAttributeKey(attributesOfEditedProduct[0]?.key);

    setPreviousSelectedCategory(selectedCategory);
  }

  let attributesValues = [];

  if (selectedAttributeKey) {
    attributesOfEditedProduct.forEach((item, index) => {
      if (item.key === selectedAttributeKey) {
        attributesValues = [...attributesValues, ...item.value];
      }
    });
  }

  const addAttributeToTable = (value, key = "") => {
    const actualKey = key || selectedAttributeKey;

    setProductAttributesTable((prev) => {
      const existedAttr = (productAttributes = productAttributesTable.find(
        (attr) => {
          // if exist change the value
          if (actualKey === attr.key) {
            attr.value = value;

            return true;
          }
        }
      ));

      if (!existedAttr) return [...prev, { key: actualKey, value }];

      return [...prev];
    });
  };

  const removeAttrFromTable = (key) => {
    setProductAttributesTable((prev) =>
      prev.filter((item) => item.key !== key)
    );
  };

  // Create new attribute

  const [newAttributeKey, setNewAttributeKey] = useState("");

  const [newAttributeValue, setNewAttributeValue] = useState("");

  const createNewAttributeHandler = () => {
    if (newAttributeKey.trim() !== "" && newAttributeValue.trim() !== "") {
      addAttributeToTable(newAttributeValue, newAttributeKey);

      reduxDispatch(
        createNewAttrForCate(
          newAttributeKey,
          newAttributeValue,
          selectedCategory
        )
      );
    }
  };

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

              <Form.Control placeholder={product.name} required type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>

              <Form.Control
                placeholder={product.description}
                required
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Count in stock</Form.Label>

              <Form.Control placeholder={product.count} required type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>

              <Form.Control
                placeholder={`$${product.price}`}
                required
                type="text"
              />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label>Choose category</Form.Label>

              <Form.Select
                onChange={(e) => setSelectedCategory(e.target.value)}
                defaultValue={product.category}
              >
                {categories.map((cate, index) => {
                  return (
                    <option key={index} value={cate.name}>
                      {cate.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Row>
              <Col className="mb-3" md={6}>
                <Form.Label>Choose attribute</Form.Label>

                <Form.Select
                  defaultValue={attributesOfEditedProduct[0]}
                  onChange={(e) => setSelectedAttributeKey(e.target.value)}
                >
                  {attributesOfEditedProduct.map((item, index) => (
                    <option key={index} value={item.key}>
                      {item.key}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col className="mb-3" md={6}>
                <Form.Label>Attribute value</Form.Label>

                <Form.Select
                  onChange={(e) => addAttributeToTable(e.target.value)}
                  defaultValue={attributesValues[0]}
                >
                  {attributesValues.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>

            {productAttributesTable.length > 0 && (
              <Table striped>
                <thead>
                  <tr>
                    <th>Attribute</th>

                    <th>Value</th>

                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {productAttributesTable.map((item, index) => (
                    <tr key={index}>
                      <td>{item.key}</td>

                      <td>{item.value}</td>

                      <td>
                        <Button
                          size="sm"
                          variant="light"
                          style={{
                            backgroundColor: "rgb(244,244,244)",
                          }}
                          onClick={() => removeAttrFromTable(item.key)}
                        >
                          <i className="bi bi-trash-fill text-danger"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
            <Form.Group className="mb-3">
              <Form.Label>
                Or create new category (e.g. Computers/Laptops/Intel)
              </Form.Label>

              <Form.Control required type="text" />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group
                  onChange={(e) => setNewAttributeKey(e.target.value)}
                >
                  <Form.Label>New attribute name</Form.Label>

                  <Form.Control required type="text" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group
                  onChange={(e) => setNewAttributeValue(e.target.value)}
                >
                  <Form.Label>Attribute value</Form.Label>

                  <Form.Control required type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Row style={{ marginBottom: -30 }}>
              <div className="mt-3 text-end">
                <Button variant="warning" onClick={createNewAttributeHandler}>
                  Add new attribute
                </Button>
              </div>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Images</Form.Label>

              <Row>
                {product.images.map((img, index) => (
                  <Col key={index} style={{ position: "relative" }} md={3}>
                    <Image
                      crossOrigin="anonymous"
                      fluid
                      src={"/images/img1.jpeg" || img.url}
                    />

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
                ))}
              </Row>

              <Form.Control required type="file" />
            </Form.Group>

            <div className="d-grid d-md-block mb-3">
              <Button>Save changes</Button>{" "}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminEditProductPageComponent;
