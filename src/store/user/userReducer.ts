import { userState, userAction } from "./types";

const initialState: userState = {
  data: null,
  loading: false,
  error: null,
};

export default function userReducer(
  state = initialState,
  action: userAction
): userState {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, loading: true };
    case "UPDATE_USER_DATA":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case "UPDATE_USER_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
