import * as actionTypes from "../constans/cartConstants";

export const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return { value: state.value + action.someValue + 1 };
    default:
      return state;
  }
};
