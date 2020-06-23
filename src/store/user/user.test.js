import userReducer from "./userReducer";
import { updateUserData, updateUserError, startLoading } from "./userActions";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const fakeUser = {
  uid: "123",
  displayName: "Tuturel",
};

const fakeError = {
  message: "Not good",
};

test("first reducer call", () => {
  const state = userReducer(undefined, {});

  expect(state).toEqual(initialState);
});

test("start loading", () => {
  const action = startLoading();

  const state = userReducer(initialState, action);

  expect(state.loading).toBe(true);
});

test("user succesfully logs in", () => {
  const action = updateUserData(fakeUser);

  const state = userReducer(initialState, action);

  expect(state.data).toEqual(fakeUser);
  expect(state.error).toBe(null);
  expect(state.loading).toBe(false);
});

test("user succesfully logs out", () => {
  const action = updateUserData(null);

  const state = userReducer(initialState, action);

  expect(state.data).toEqual(null);
  expect(state.error).toBe(null);
  expect(state.loading).toBe(false);
});

test("error while trying to log in/out", () => {
  const action = updateUserError(fakeError);

  const state = userReducer(initialState, action);

  expect(state.error).toEqual(fakeError);
  expect(state.loading).toBe(false);
});
