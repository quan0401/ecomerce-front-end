import * as actionTypes from "../constans/cartConstants";

const localStorageCart = JSON.parse(localStorage.getItem("cart"));
console.log({ localStorageCart });

const CART_INIT_STATE = {
  cartItems: localStorageCart?.cartItems || [],
  itemsCount: localStorageCart?.itemsCount || 0,
  cartSubtotal: localStorageCart?.cartSubtotal || 0,
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
