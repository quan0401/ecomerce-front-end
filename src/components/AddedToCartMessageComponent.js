import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AddedToCartMessageComponent() {
  const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>The product was added to your cart</Alert.Heading>
      {/* <p>
        Change this and that and try again. Duis mollis, est non commodo luctus,
        nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
        consectetur purus sit amet fermentum.
      </p> */}
      <Link to="/cart">
        <Button variant="danger">Go to cart</Button>
      </Link>
    </Alert>
  );
}

export default AddedToCartMessageComponent;
