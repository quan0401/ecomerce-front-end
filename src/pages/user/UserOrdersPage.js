import { Table, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserOrdersPage() {
  return (
    <Container>
      <Row className="mt-3">
        <Col col={12}>
          <h1>My orders</h1>
          <Table bordered striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Date</th>
                <th>Total</th>
                <th>Delivered</th>
                <th>Order detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Otto</td>
                <td>04/01/2004</td>
                <td>100</td>
                <td>
                  <i className="bi bi-check-lg text-success"></i>
                </td>
                <td>
                  <Link to="/user/order-detail">Go to order</Link>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Otto</td>
                <td>04/01/2004</td>
                <td>100</td>
                <td>
                  <i className="bi bi-x-lg text-danger"></i>
                </td>
                <td>
                  <Link to="/user/order-detail">Go to order</Link>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Otto</td>
                <td>04/01/2004</td>
                <td>100</td>
                <td>
                  <i className="bi bi-x-lg text-danger"></i>
                </td>
                <td>
                  <Link to="/user/order-detail">Go to order</Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default UserOrdersPage;
