import { useEffect, useRef, useState } from "react";
import "./UserChatComponent.css";
import { Button, Form } from "react-bootstrap";
import socketIOClient from "socket.io-client";
import { useSelector } from "react-redux";

function UserChatComponent() {
  const [hideChat, setHideChat] = useState(true);
  const [socket, setSocket] = useState();
  const [chat, setChat] = useState([{ admin: "Hello" }]);
  const [chatText, setChatText] = useState("");
  const { isAdmin } = useSelector((state) => state.userRegisterLogin.userInfo);

  const chatBoxRef = useRef();

  useEffect(() => {
    const socket = socketIOClient.connect();
    setSocket(socket);
    return () => socket.disconnect();
  }, []);

  const handleSubmit = (e) => {
    if (e.keyCode && e.keyCode !== 13) return;

    if (chatText === null || chatText === "" || chatText === false || !chatText)
      return;

    setChat((prev) => [...prev, { client: chatText }]);
    setChatText("");
    chatBoxRef.current.focus();

    socket.emit("client sends message", chatText);
  };

  return (
    <>
      {!hideChat && (
        <div className="form-popup" id="myForm">
          <div className="form-container">
            <h2>Chat</h2>
            <div className="chat-container">
              {chat.map((item, index) => {
                const [key] = Object.keys(item);
                if (key === "client")
                  return (
                    <div key={index} className="chat-msg-container client">
                      <div className="chat-msg">{item[key]}</div>
                    </div>
                  );
                else
                  return (
                    <div key={index} className="chat-msg-container">
                      <div className="chat-msg">{item[key]}</div>
                    </div>
                  );
              })}
              {/* <div className="chat-msg-container">
                <div className="chat-msg">hello1</div>
              </div>
              <div className="chat-msg-container admin">
                <div className="chat-msg">hello1</div>
              </div>
              <div className="chat-msg-container">
                <div className="chat-msg">hello1</div>
              </div>
              <div className="chat-msg-container admin">
                <div className="chat-msg">
                  ahhnope ahhnope ahhnope ahhnope ahhnope ahhnope ahhnope ahh
                  nope ahh nope ahhnope{" "}
                </div>
              </div>
              <div className="chat-msg-container">
                <div className="chat-msg">hello1</div>
              </div>
              <div className="chat-msg-container admin">
                <div className="chat-msg">hello1</div>
              </div>
              <div className="chat-msg-container">
                <div className="chat-msg">hello1</div>
              </div>
              <div className="chat-msg-container admin">
                <div className="chat-msg">
                  ahhnope ahhnope ahhnope ahhnope ahhnope ahhnope ahhnope ahh
                  nope ahh nope ahhnope{" "}
                </div>
              </div> */}
            </div>

            <Form>
              <Form.Group className="mb-1 mt-3">
                {/* <Form.Label></Form.Label> */}
                <Form.Control
                  value={chatText}
                  onChange={(e) => setChatText(e.target.value)}
                  onKeyUp={(e) => handleSubmit(e)}
                  placeholder="Message"
                  as="textarea"
                  rows={2}
                  ref={chatBoxRef}
                ></Form.Control>
              </Form.Group>
            </Form>

            <div className="text-end">
              <Button
                onClick={(e) => handleSubmit(e)}
                type="submit"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  marginTop: -85,
                  marginRight: 4,
                }}
                className="btn"
              >
                <i style={{ color: "#ADD8E6" }} className="bi bi-send-fill"></i>
              </Button>
            </div>
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
