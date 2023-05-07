import { Table, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import { useEffect, useState } from "react";
import { getOrdersAdmin } from "../../service/orderService";

function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);

  const getDate = (setDate) => {
    const date = new Date(setDate);
    return date.toLocaleDateString();
  };

  useEffect(() => {
    const abortController = new AbortController();
    getOrdersAdmin(abortController).then((res) => {
      setOrders(res);
    });
    return () => abortController.abort();
  }, []);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>Orders</h1>

          <Table bordered striped hover>
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Date</th>
                <th>Total</th>
                <th>Subtotal</th>
                <th>Delivered</th>
                <th>Order detail</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {order?.user?.firstName + " " + order?.user?.lastName}
                  </td>
                  <td>{getDate(order.createdAt)}</td>
                  <td>{order?.orderTotal?.itemsCount}</td>
                  <td>{order?.orderTotal?.cartSubTotal} $</td>
                  <td>
                    {order?.isDelivered === true ? (
                      <i className="bi bi-check-lg text-success"></i>
                    ) : (
                      <i className="bi bi-x-lg text-danger"></i>
                    )}
                  </td>
                  <td>
                    <Link to="/user/order-detail">Go to order</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminOrdersPage;
