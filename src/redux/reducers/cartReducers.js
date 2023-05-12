import * as actionTypes from "../constans/cartConstants";

const CART_INIT_STATE = {
  cartItems: [],
  itemsCount: 0,
  cartSubtotal: 0,
};

export const cartReducer = (state = CART_INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const { payload } = action;

      const newState = { ...state };

      const productAlreadyExistsInState = newState.cartItems.find(
        (item) => item.productId === payload.productId
      );

      if (!productAlreadyExistsInState) {
        newState.cartItems.push(payload);

        newState.itemsCount += +payload.quantity;

        newState.cartSubtotal += +payload.quantity * +payload.price;
      } else {
        productAlreadyExistsInState.quantity += +payload.quantity;

        newState.itemsCount += +payload.quantity;

        newState.cartSubtotal += +payload.quantity * +payload.price;
      }

      return newState;
    }
    default:
      return state;
  }
};
