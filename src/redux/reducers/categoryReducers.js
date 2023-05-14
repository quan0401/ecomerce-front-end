import { GET_CATEGORIES } from "../constans/categoryConstants";

const categoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default categoryReducer;
