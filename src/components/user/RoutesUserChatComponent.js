import { Outlet } from "react-router-dom";
import UserChatComponent from "./UserChatComponent";

function RoutesUserChatComponent() {
  return (
    <>
      <Outlet />
      <UserChatComponent />
    </>
  );
}

export default RoutesUserChatComponent;
