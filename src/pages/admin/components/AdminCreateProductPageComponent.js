import { Button, Form, Container, Row, Col, Table } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useState, useEffect } from "react";

function AdminCreateProductPageComponent({
  categories,
  uploadImageApi,
  reduxDispatch,
  createProductApi,
}) {
  const navigate = useNavigate();

  // use for display to the frontend
  const [selectedCategory, setSelectedCategory] = useState("");

  const [attributesList, setAttributesList] = useState([]);

  const [attributesValues, setAttributesValues] = useState([]);

  // selected Values

  const [selectedAttributeKey, setSelectedAttributeKey] = useState("");

  const [attributeTable, setAttributeTable] = useState([]);

  const [images, setImages] = useState();

  useEffect(() => {
    if (categories[0]?.name) setSelectedCategory(categories[0]?.name);
  }, [categories]);

  useEffect(() => {
    if (selectedCategory) {
      const hightLevelCategory = selectedCategory.split("/")[0];

      const newAttributesList = categories.reduce((acc, currentValue) => {
        if (currentValue.name.split("/")[0] === hightLevelCategory) {
          return [...acc, ...currentValue.attributes];
        }
        return [...acc];
      }, []);

      setAttributesList(newAttributesList);

      if (newAttributesList[0]?.key)
        setSelectedAttributeKey(newAttributesList[0]?.key);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedAttributeKey) {
      const newAttributesValuesList = attributesList.reduce(
        (acc, currentValue) => {
          if (currentValue.key === selectedAttributeKey) {
            return [...acc, ...currentValue.value];
          }
          return acc;
        },
        []
      );

      setAttributesValues(newAttributesValuesList);
    }
  }, [selectedAttributeKey]);

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const {
      name: { value: nameValue },
      price: { value: priceValue },
      description: { value: descriptionValue },
      count: { value: countValue },
    } = e.currentTarget.elements;

    if (e.currentTarget.checkValidity()) {
      let createdProductId = null;
      await createProductApi({
        name: nameValue,
        price: priceValue,
        description: descriptionValue,
        count: countValue,
        attributesTable: attributeTable,
        category: selectedCategory,
      })
        .then((res) => {
          const {
            newProduct: { _id },
          } = res;

          createdProductId = _id;

          toast.success(res.EM);
        })
        .catch((err) => {
          console.log(err);
        });
      if (images && createdProductId) {
        await uploadImageApi(images, createdProductId);
      }
      console.log(createdProductId);
      navigate("/admin/edit-product/" + createdProductId, { replace: true });
      setValidated(true);
    }
    setValidated(true);
  };

  const handleAddToTable = (value, key = "") => {
    const actualKey = key || selectedAttributeKey;

    if (actualKey.trim() !== "" && value.trim() !== "") {
      setAttributeTable((prev) => {
        const newList = prev.filter((item) => item.key !== actualKey);

        return [...newList, { key: actualKey, value }];
      });
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <h1>Create new product</h1>
          <Button
            as={Link}
            to="/admin/products"
            variant="info"
            className="my-2"
          >
            Go back
          </Button>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="text-secondary">Name</Form.Label>
              <Form.Control name="name" required type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-secondary">Description</Form.Label>
              <Form.Control
                name="description"
                required
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-secondary">Count in stock</Form.Label>
              <Form.Control name="count" required type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-secondary">Price</Form.Label>
              <Form.Control name="price" required type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-secondary">
                Category X (remove selected)
              </Form.Label>
              <Form.Select
                name="category"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cate, index) => (
                  <option key={index} value={cate.name}>
                    {cate.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Row>
              <Col className="mb-3" md={6}>
                <Form.Label className="text-secondary">
                  Choose attribute
                </Form.Label>
                <Form.Select
                  onChange={(e) => setSelectedAttributeKey(e.target.value)}
                >
                  {attributesList.map((attr, index) => (
                    <option key={index} value={attr.key}>
                      {attr.key}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col className="mb-3" md={6}>
                <Form.Label className="text-secondary">
                  Attribute value
                </Form.Label>
                <Form.Select
                  onChange={(e) => {
                    if (e.target.value !== "Choose_attribute_value") {
                      handleAddToTable(e.target.value);
                    }
                  }}
                >
                  <option value="Choose_attribute_value">
                    Choose attribute value
                  </option>
                  {attributesValues.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
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
                {attributeTable.length > 0 &&
                  attributeTable.map((item, index) => (
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
                          // onClick={() => removeAttrFromTable(item.key)}
                        >
                          <i className="bi bi-trash-fill text-danger"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            <Form.Group className="mb-3">
              <Form.Label className="text-secondary">
                Or create new category (e.g. Computers/Laptops/Intel)
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Row>
              <Col className="mb-3" md={6}>
                <Form.Group>
                  <Form.Label className="text-secondary">
                    New attribute name
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col className="mb-3" md={6}>
                <Form.Group>
                  <Form.Label className="text-secondary">
                    Attribute value
                  </Form.Label>
                  <Form.Control noValidate type="text" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label className="text-secondary">Images</Form.Label>
              <Form.Control
                onChange={(e) => setImages(e.target.files)}
                required
                multiple
                type="file"
              />
            </Form.Group>

            <div className="d-grid d-md-block">
              <Button type="submit">Create</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminCreateProductPageComponent;
