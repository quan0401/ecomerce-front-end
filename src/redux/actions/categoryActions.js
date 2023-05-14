import { getCategories } from "../../service/categoryService";
import { GET_CATEGORIES } from "../constans/categoryConstants";
export const getCategoriesAction = () => async (dispatch) => {
  const categories = await getCategories();
  dispatch({
    type: GET_CATEGORIES,
    payload: categories,
  });
};
