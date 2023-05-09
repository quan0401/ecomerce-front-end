import * as actionTypes from "../constans/cartConstants";

// export const addToCart = () => (dispatch) => {
//   dispatch({
//     type: actionTypes.ADD_TO_CART,
//     someValue: 0,
//   });
// };

// same
export const addToCart = () => ({
  type: actionTypes.ADD_TO_CART,
  someValue: 0,
});
