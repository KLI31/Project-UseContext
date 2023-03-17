import { GET_USER, GET_PROFILE } from "../types";

export default function (state, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_USER:
      return {
        ...state,
        users: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        selectedUsers: payload,
      };

    default:
      return state;
  }
}
