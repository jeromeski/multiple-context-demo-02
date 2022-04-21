export const INITIAL_STATE = {
  isAuthenticated: false
};

export function authReducer(state, action) {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        currentForm: "signIn"
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true
      };
    case "SIGN_OUT":
      return {
        ...state,
        isAuthenticated: false
      };
    case "SIGNUP":
      return {
        ...state,
        currentForm: "signUp"
      };
    case "FORGOTPASS":
      return {
        ...state,
        currentForm: "forgotPass"
      };
    default:
      return state;
  }
}
