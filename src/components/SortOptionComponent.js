import Form from "react-bootstrap/Form";

function SortOptionComponent() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Sort by</option>
      <option value="price1">Price: Low to high</option>
      <option value="price-1">Price: High to Low</option>
      <option value="name1">Name: A-Z</option>
      <option value="name-1">Name: Z-A</option>
    </Form.Select>
  );
}

export default SortOptionComponent;
