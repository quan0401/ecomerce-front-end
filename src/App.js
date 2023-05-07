import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import publicRoutes from "./routes/publicRoutes";

import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

import protectedRoutes from "./routes/protectedRoutes";

import RoutesUserChatComponent from "./components/user/RoutesUserChatComponent";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ScrollToTop from "./utils/ScrollToTop";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      {/* Public routes */}
      <Router>
        <ScrollToTop />

        <HeaderComponent />
        <Routes>
          <Route element={<RoutesUserChatComponent />}>
            {publicRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.Component />}
              />
            ))}
          </Route>

          {/* User and admin routes */}
          {protectedRoutes.map((route, index) => {
            let isAdminRoute = false;
            if (route.path.startsWith("/admin")) {
              isAdminRoute = true;
            }
            return (
              <Route
                key={"parent-route"}
                element={<ProtectedRoutesComponent admin={isAdminRoute} />}
              >
                <Route
                  key={index}
                  path={route.path}
                  element={<route.Component />}
                />
              </Route>
            );
          })}
        </Routes>
        <FooterComponent />
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
