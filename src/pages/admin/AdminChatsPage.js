import { Container, Row, Col } from "react-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import AdminChatRoomComponent from "../../components/admin/AdminChatRoomComponent";
import { useSelector } from "react-redux";

function AdminChatsPage() {
  const { chatRooms } = useSelector((state) => state.adminChat);
  return (
    <Container>
      <Row className="mt-3">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <Row>
            {Object.entries(chatRooms).map((chatRoom, index) => (
              <AdminChatRoomComponent key={index} chatRoom={chatRoom} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminChatsPage;
