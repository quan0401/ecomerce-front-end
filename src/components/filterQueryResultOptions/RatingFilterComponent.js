import { useState } from "react";
import { Form } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

function RatingFilterComponent() {
  const [value, setValue] = useState(-1);
  return (
    <>
      <Form>
        <Form.Label className="fw-bold">Rating: </Form.Label>
        <br />
        <Rating
          initialValue={5}
          onClick={(e) => setValue(e)}
          size={"24px"}
          style={{ marginTop: "-3px" }}
        />
      </Form>
    </>
  );
}

export default RatingFilterComponent;
