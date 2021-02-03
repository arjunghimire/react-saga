const initialState = {
  user: {},
  isLoggedIn: false,
  loading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "login_request":
      return {
        ...state,
        loading: true,
      };

    case "login_success":
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };
    case "login_failed":
      return {
        ...state,
        loading: false,
      };
    default:
      break;
  }
  return state;
}

export default rootReducer;
