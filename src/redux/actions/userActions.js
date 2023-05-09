import * as actionTypes from "../constans/userConstants";
export const setReduxUserState = (user) => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_USER,
    payload: { ...user },
  });
};
