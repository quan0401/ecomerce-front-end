import * as chatConstants from "../constants/chatConstants";
const CHAT_INITIAL_STATE = {
  chatRooms: {},
};

const adminChatReducer = (state = CHAT_INITIAL_STATE, action) => {
  switch (action.type) {
    case chatConstants.SET_CHATROOMS: {
      if (state.chatRooms[action.payload.user]) {
        state.chatRooms[action.payload.user].push({
          client: action.payload.message,
        });
        return {
          ...state,
        };
      } else
        return {
          ...state,
          chatRooms: {
            ...state.chatRooms,
            [action.payload.user]: [{ client: action.payload.message }],
          },
        };
    }
    default:
      return state;
  }
};

export default adminChatReducer;
