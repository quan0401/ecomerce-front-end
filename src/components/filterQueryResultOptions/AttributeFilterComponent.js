import { Form } from "react-bootstrap";

const attributes = [
  { color: ["red", "blue", "pink"] },
  { ram: ["8gb", "16gb", "24gb", "32gb", "64gb", "96gb"] },
];

function AttributeFilterComponent() {
  // attributes.map((attribute) => {
  //   const key = Object.keys(attribute);
  //   console.log(attribute[key]);
  // });
  return (
    <Form>
      {attributes.map((attribute, index) => {
        const key = Object.keys(attribute);
        return (
          <div key={index}>
            <Form.Label
              style={{ textTransform: "capitalize" }}
              className="fw-bold"
            >
              {key}
            </Form.Label>
            {attribute[key].map((item, index1) => (
              <Form.Check key={index1} label={item} />
            ))}
          </div>
        );
      })}
    </Form>
  );
}

export default AttributeFilterComponent;
