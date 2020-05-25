const initialState = {
  data: {},
  loading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, loading: true };
    case 'UPDATE_USER_DATA':
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case 'UPDATE_USER_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}
