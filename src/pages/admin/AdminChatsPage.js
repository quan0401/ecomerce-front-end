import {
  Container,
  Row,
  Col,
  Button,
  Form,
  CloseButton,
} from "react-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import AdminChatRoomComponent from "../../components/admin/AdminChatRoomComponent";

function AdminChatsPage() {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <Row>
            <AdminChatRoomComponent />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminChatsPage;
