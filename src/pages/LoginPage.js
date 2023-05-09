import { loginUser } from "../service/userService";

import { setReduxUserState } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import LoginPageComponent from "./components/LoginPageComponents";

function LoginPage() {
  const dispatch = useDispatch();

  return (
    <LoginPageComponent
      setReduxUserState={setReduxUserState}
      loginUser={loginUser}
      reduxDispatch={dispatch}
    />
  );
}

export default LoginPage;
