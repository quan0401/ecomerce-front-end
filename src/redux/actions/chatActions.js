import * as chatConstants from "../constants/chatConstants";

export const setChatRoom = (user, message) => (dispatch, getState) => {
  dispatch({
    payload: {
      user,
      message,
    },
    type: chatConstants.SET_CHATROOMS,
  });
};
