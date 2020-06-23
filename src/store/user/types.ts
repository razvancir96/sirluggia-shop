export type userError = null | {
  error: string;
};

export type userData = null | {
  uid: string;
  displayName: string;
};

export interface startLoadingAction {
  type: "START_LOADING";
}

export interface updateUserDataAction {
  type: "UPDATE_USER_DATA";
  payload: userData;
}

export interface updateUserErrorAction {
  type: "UPDATE_USER_ERROR";
  payload: userError;
}

export type userAction =
  | startLoadingAction
  | updateUserDataAction
  | updateUserErrorAction;

export interface userState {
  data: userData;
  loading: boolean;
  error: userError;
}
