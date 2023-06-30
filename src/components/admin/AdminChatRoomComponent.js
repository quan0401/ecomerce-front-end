import { Fragment, useState } from "react";
import { Button, Toast, Form } from "react-bootstrap";

function AdminChatRoomComponent({ chatRoom }) {
  const [showA, setShowA] = useState(true);
  // const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  // const toggleShowB = () => setShowB(!showB);
  console.log(chatRoom);

  return (
    <div className="d-flex">
      <div className="mb-4 me-3">
        <Button onClick={toggleShowA} className="mb-2">
          Show chat with John Doe
        </Button>

        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto">Chat with John Doe</strong>
            <small>11 mins ago</small>
          </Toast.Header>

          <Toast.Body style={{ maxHeight: 300, overflowY: "auto" }}>
            <div>
              {Array.from({ length: 30 }).map((item, index) => (
                <Fragment key={index}>
                  <p className="bg-primary rounded-pill px-3 py-1 text-white ms-5">
                    <b>Admin: </b>Woohoo, you're reading this text in a Toast!
                  </p>
                  <p className="me-5 bg-success rounded-pill px-3 py-1 text-white">
                    <b>Admin: </b>Woohoo, you're reading this text in a Toast!
                  </p>

                  <p className="bg-primary rounded-pill px-3 py-1 text-white ms-5">
                    <b>Admin: </b>Woohoo, you're reading this text in a Toast!
                  </p>
                  <p className="me-5 bg-success rounded-pill px-3 py-1 text-white">
                    <b>Admin: </b>Woohoo, you're reading this text in a Toast!
                  </p>
                </Fragment>
              ))}
            </div>
          </Toast.Body>
          <Form className="p-3">
            <Form.Group>
              <Form.Control
                className="p-2 mb-2"
                as="textarea"
                rows={1}
                type="text"
                placeholder="Write a message"
              />
            </Form.Group>
            <Button variant="success" className="text-white">
              Send
            </Button>
          </Form>
        </Toast>
      </div>

      {/* <div className="mb-4">
        <Button onClick={toggleShowB} className="mb-2">
          Show chat with John Doe
        </Button>

        <Toast show={showB} onClose={toggleShowB}>
          <Toast.Header>
            <strong className="me-auto">Chat with John Doe</strong>
            <small>11 mins ago</small>
          </Toast.Header>

          <Toast.Body style={{ maxHeight: 300, overflowY: "auto" }}>
            <div>
              {Array.from({ length: 30 }).map((item, index) => (
                <Fragment key={index}>
                  <p className="bg-primary rounded-pill px-3 py-1 text-white ms-5">
                    <b>Admin: </b>Woohoo, you're reading this text in a Toast!
                  </p>
                  <p className="me-5 bg-success rounded-pill px-3 py-1 text-white">
                    <b>Admin: </b>Woohoo, you're reading this text in a Toast!
                  </p>

                  <p className="bg-primary rounded-pill px-3 py-1 text-white ms-5">
                    <b>Admin: </b>Woohoo, you're reading this text in a Toast!
                  </p>
                  <p className="me-5 bg-success rounded-pill px-3 py-1 text-white">
                    <b>Admin: </b>Woohoo, you're reading this text in a Toast!
                  </p>
                </Fragment>
              ))}
            </div>
          </Toast.Body>
          <Form className="p-3">
            <Form.Group>
              <Form.Control
                className="p-2 mb-2"
                as="textarea"
                rows={1}
                type="text"
                placeholder="Write a message"
              />
            </Form.Group>
            <Button variant="success" className="text-white">
              Send
            </Button>
          </Form>
        </Toast>
      </div> */}
    </div>
  );
}

export default AdminChatRoomComponent;
