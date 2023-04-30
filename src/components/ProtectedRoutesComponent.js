import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutesComponent({ admin }) {
  let auth = false;
  if (admin) {
    const adminAuth = true;
    if (adminAuth) auth = true;
  } else {
    const userAuth = true;
    if (userAuth) auth = true;
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutesComponent;
