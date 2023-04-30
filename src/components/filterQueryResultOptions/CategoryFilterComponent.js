import { Form } from "react-bootstrap";

function CategoryFilterComponent() {
  return (
    <Form>
      <Form.Label className="fw-bold">Category</Form.Label>
      {Array.from({ length: 5 }).map((item, index) => (
        <Form.Check // prettier-ignore
          key={index}
          type="checkbox"
          id="custom-switch"
          label="Check this switch"
          style={{ color: "green" }}
        />
      ))}
    </Form>
  );
}

export default CategoryFilterComponent;
