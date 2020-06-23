import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { signInWithGoogle, signOut } from "../../apis/firebase/firebase";
import {
  userData,
  userError,
  startLoadingAction,
  updateUserDataAction,
  updateUserErrorAction,
} from "./types";
import { rootState } from "../index";

export function startLoading(): startLoadingAction {
  return {
    type: "START_LOADING",
  };
}

export function updateUserData(payload: userData): updateUserDataAction {
  return {
    type: "UPDATE_USER_DATA",
    payload,
  };
}

export function updateUserError(payload: userError): updateUserErrorAction {
  return {
    type: "UPDATE_USER_ERROR",
    payload,
  };
}

export function loginUser(): ThunkAction<
  void,
  rootState,
  unknown,
  Action<string>
> {
  return (dispatch) => {
    dispatch(startLoading());

    signInWithGoogle()
      .then((userObj) => {
        dispatch(updateUserData(userObj.user));
      })
      .catch((error) => {
        dispatch(updateUserError(error));
      });
  };
}

export function logoutUser(): ThunkAction<
  void,
  rootState,
  unknown,
  Action<string>
> {
  return (dispatch) => {
    dispatch(startLoading());

    signOut()
      .then(() => {
        dispatch(updateUserData(null));
      })
      .catch((error) => {
        dispatch(updateUserError(error.message));
      });
  };
}
