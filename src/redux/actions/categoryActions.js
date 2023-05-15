import {
  createNewAttrForCateApi,
  getCategories,
} from "../../service/categoryService";
import {
  GET_CATEGORIES,
  CREATE_NEW_ATTR_FOR_CATE,
} from "../constans/categoryConstants";
export const getCategoriesAction = () => async (dispatch) => {
  const categories = await getCategories();
  dispatch({
    type: GET_CATEGORIES,
    payload: categories,
  });
};

export const createNewAttrForCate =
  (key, value, categoryChosen) => async (dispatch, getState) => {
    const { updatedCategory: categories } = await createNewAttrForCateApi(
      key,
      value,
      categoryChosen
    );
    dispatch({
      type: CREATE_NEW_ATTR_FOR_CATE,
      payload: categories,
    });
  };
