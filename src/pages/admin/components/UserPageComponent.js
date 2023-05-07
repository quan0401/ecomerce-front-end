import { Table, Container, Row, Col, Button } from "react-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../../../service/userService";
import { useEffect, useState } from "react";

function UserPageComponent() {
  const [users, setUsers] = useState([]);
  const [userDelete, setUserDelete] = useState(false);

  const handlDelete = async (userId, userName) => {
    if (window.confirm("Delete " + userName + " ?")) {
      await deleteUser(userId).then((res) => {
        if (res?.EC === 0) {
          setUserDelete((prev) => !prev);
        }
      });
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    getUsers(abortController).then((res) => {
      setUsers(res);
    });
    return () => abortController.abort();
  }, [userDelete]);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>User List</h1>
          {/* <Link to="/admin/edit-user">
            <Button className="mb-3">Add product</Button>
          </Link> */}
          <Table bordered striped responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Is Admin</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.isAdmin ? (
                      <i className="bi bi-check-lg text-success"></i>
                    ) : (
                      <i className="bi bi-x-lg text-danger"></i>
                    )}
                  </td>
                  <td>
                    <div className="d-flex ">
                      <Button
                        as={Link}
                        to="/admin/edit-user"
                        className="mx-2"
                        size="sm"
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Button>

                      <Button
                        onClick={() =>
                          handlDelete(
                            user._id,
                            user.firstName + " " + user.lastName
                          )
                        }
                        variant="danger"
                        size="sm"
                      >
                        <i className="bi bi-trash2"></i>
                      </Button>
                    </div>
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

export default UserPageComponent;
