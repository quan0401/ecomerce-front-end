import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import publicRoutes from "./routes/publicRoutes";

import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

import protectedRoutes from "./routes/protectedRoutes";

import RoutesUserChatComponent from "./components/user/RoutesUserChatComponent";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ScrollToTop from "./utils/ScrollToTop";

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
    </div>
  );
}

export default App;
