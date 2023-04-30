import { useState } from "react";
import "./UserChatComponent.css";
import { Button, Form } from "react-bootstrap";

function UserChatComponent() {
  const [hideChat, setHideChat] = useState(true);

  return (
    <>
      {!hideChat && (
        <div className="form-popup" id="myForm">
          <div className="form-container">
            <h2>Chat</h2>
            <div className="chat-container">
              <div className="chat-msg-container">
                <div className="chat-msg">hello1</div>
              </div>
              <div className="chat-msg-container me">
                <div className="chat-msg">hello1</div>
              </div>
              <div className="chat-msg-container">
                <div className="chat-msg">hello1</div>
              </div>
              <div className="chat-msg-container me">
                <div className="chat-msg">
                  ahhnope ahhnope ahhnope ahhnope ahhnope ahhnope ahhnope ahh
                  nope ahh nope ahhnope{" "}
                </div>
              </div>
              <div className="chat-msg-container">
                <div className="chat-msg">hello1</div>
              </div>
              <div className="chat-msg-container me">
                <div className="chat-msg">hello1</div>
              </div>
              <div className="chat-msg-container">
                <div className="chat-msg">hello1</div>
              </div>
              <div className="chat-msg-container me">
                <div className="chat-msg">
                  ahhnope ahhnope ahhnope ahhnope ahhnope ahhnope ahhnope ahh
                  nope ahh nope ahhnope{" "}
                </div>
              </div>
            </div>

            <Form>
              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {/* <Form.Label></Form.Label> */}
                <Form.Control placeholder="Message" as="textarea" rows={2} />
              </Form.Group>
            </Form>

            <Button
              type="submit"
              style={{
                backgroundColor: "lightblue",
                border: "none",
              }}
              className="btn"
            >
              Send
            </Button>
          </div>
        </div>
      )}
      <div className="chat-circle" onClick={() => setHideChat(!hideChat)}>
        {hideChat ? (
          <i className="bi bi-chat-heart-fill"></i>
        ) : (
          <>
            <i className="bi bi-x-circle"></i>
          </>
        )}
      </div>
    </>
  );
}

export default UserChatComponent;
