import { useState } from "react";
import { Form } from "react-bootstrap";

function PriceFilterComponent() {
  const [value, setValue] = useState(-2);

  return (
    <>
      <Form.Label>
        <div>
          Below:
          {value < 0 ? (
            <span className="fw-bold"> None</span>
          ) : (
            <span className="fw-bold"> {value} VND</span>
          )}
        </div>
      </Form.Label>
      <Form.Range
        min={10}
        step={10}
        max={10000}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default PriceFilterComponent;
