import * as actionTypes from "../constans/cartConstants";

import { getProductById } from "../../service/productService";

export const addToCart =
  (productId, quantity, changeQuantiy = false) =>
  async (dispatch, getState) => {
    const { _id, name, images, price, count } = await getProductById(productId);

    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        productId: _id,
        name,
        image: images[0] ? images[0] : null,
        price,
        count,
        quantity,
        changeQuantiy,
      },
    });
    localStorage.setItem("cart", JSON.stringify(getState().cart));
  };

export const removeFromCart =
  (productId, quantity, price) => (dispatch, getState) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: { productId, quantity, price },
    });
    localStorage.setItem("cart", JSON.stringify(getState().cart));
  };
// same
// export const addToCart = (productId, quantity) => ({
//   type: actionTypes.ADD_TO_CART,
//   someValue: 0,
// });
