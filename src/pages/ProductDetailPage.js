import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../redux/actions/cartActions";

import ProductDetailPageComponent from "./components/ProductDetailPageComponent";

const images = ["/images/img1.jpeg", "/images/img2.JPG", "/images/img3.jpeg"];

function ProductDetailPage() {
  const products = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const addToCartHandler = (productId, quantity) => {
    dispatch(addToCart(productId, quantity));
  };

  return (
    <ProductDetailPageComponent
      addToCartRedux={addToCartHandler}
      products={products}
    />
  );
}

export default ProductDetailPage;
