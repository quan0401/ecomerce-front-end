import { Table, Container, Row, Col, Button } from "react-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";
import { Link } from "react-router-dom";

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "JohnDoe@aol.com",
    isAdmin: false,
  },
  {
    firstName: "Henry",
    lastName: "Martinez",
    email: "henrymartinez@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Michael",
    lastName: "Wilson",
    email: "michaelwilson@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Wendy",
    lastName: "Thomas",
    email: "wendythomas@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Lucy",
    lastName: "Scott",
    email: "lucyscott@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Frank",
    lastName: "Smith",
    email: "franksmith@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Grace",
    lastName: "Johnson",
    email: "gracejohnson@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "David",
    lastName: "Baker",
    email: "davidbaker@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Emily",
    lastName: "Harris",
    email: "emilyharris@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Bob",
    lastName: "Anderson",
    email: "bobanderson@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Zachary",
    lastName: "Brown",
    email: "zacharybrown@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Jacob",
    lastName: "Wilson",
    email: "jacobwilson@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Alice",
    lastName: "Harris",
    email: "aliceharris@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Nancy",
    lastName: "Adams",
    email: "nancyadams@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Tina",
    lastName: "Anderson",
    email: "tinaanderson@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Kate",
    lastName: "Thompson",
    email: "katethompson@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Yvonne",
    lastName: "King",
    email: "yvonneking@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Isabella",
    lastName: "Davis",
    email: "isabelladavis@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Rachel",
    lastName: "Wright",
    email: "rachelwright@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Penny",
    lastName: "Anderson",
    email: "pennyanderson@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Victor",
    lastName: "Davis",
    email: "victordavis@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Robert",
    lastName: "Johnson",
    email: "RobertJohnson@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Mary",
    lastName: "Taylor",
    email: "MaryTaylor@yahoo.com",
    isAdmin: false,
  },
  {
    firstName: "Mary",
    lastName: "Taylor",
    email: "MaryTaylor@outlook.com",
    isAdmin: false,
  },
  {
    firstName: "Christopher",
    lastName: "Clark",
    email: "ChristopherClark@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Amanda",
    lastName: "Jackson",
    email: "AmandaJackson@aol.com",
    isAdmin: true,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "JaneSmith@hotmail.com",
    isAdmin: false,
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "JohnDoe@outlook.com",
    isAdmin: false,
  },
  {
    firstName: "Amanda",
    lastName: "Jackson",
    email: "AmandaJackson@hotmail.com",
    isAdmin: true,
  },
  {
    firstName: "Michael",
    lastName: "Anderson",
    email: "MichaelAnderson@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Emily",
    lastName: "King",
    email: "emilyking@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Jacob",
    lastName: "Martin",
    email: "jacobmartin@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Grace",
    lastName: "Wilson",
    email: "gracewilson@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Lucy",
    lastName: "Garcia",
    email: "lucygarcia@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Henry",
    lastName: "Davis",
    email: "henrydavis@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Frank",
    lastName: "Anderson",
    email: "frankanderson@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Bob",
    lastName: "Scott",
    email: "bobscott@gmail.com",
    isAdmin: true,
  },
  {
    firstName: "Charlie",
    lastName: "Nelson",
    email: "charlienelson@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "David",
    lastName: "White",
    email: "davidwhite@gmail.com",
    isAdmin: false,
  },
  {
    firstName: "Kate",
    lastName: "Harris",
    email: "kateharris@gmail.com",
    isAdmin: true,
  },
];

function UserPageComponent() {
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
                      <Button variant="danger" size="sm">
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
