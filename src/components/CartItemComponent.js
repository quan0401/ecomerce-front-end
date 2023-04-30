import { Form, ListGroup, Button, Image } from "react-bootstrap";

function CartItemComponent({ img }) {
  return (
    <ListGroup.Item className="py-4">
      <div className="d-md-flex justify-content-around align-items-center">
        <Image
          crossOrigin="anonymous"
          src={img}
          width={80}
          height={40}
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            width: "120px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span>Product1 lenovo</span>
        </div>
        <div className="fw-bold">200.000 VND</div>
        <div>
          <Form.Select aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Form.Select>
        </div>
        {/* Trash Button */}
        <Button
          variant="secondary"
          onClick={() => window.confirm("Are you sure?")}
        >
          <i className="text-white bi bi-trash-fill"></i>
        </Button>
      </div>
    </ListGroup.Item>
  );
}

export default CartItemComponent;
