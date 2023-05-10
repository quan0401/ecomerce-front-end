import RegisterPageComponent from "./components/RegisterPageComponent";
import { registerUser } from "../service/userService";

function RegisterPage() {
  return <RegisterPageComponent registerUser={registerUser} />;
}

export default RegisterPage;
