import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductListPage from "../pages/ProductListPage";
import RegisterPage from "../pages/RegisterPage";

const routes = [
  { path: "/cart", Component: CartPage },
  { path: "/home", Component: HomePage },

  { path: "/login", Component: LoginPage },
  { path: "/product-detail/:id", Component: ProductDetailPage },
  { path: "/product-list", Component: ProductListPage },
  { path: "/register", Component: RegisterPage },

  {
    path: "*",
    Component: function () {
      return <h1>Page not exist 404</h1>;
    },
  },
];
export default routes;
