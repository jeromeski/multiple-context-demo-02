import makeStore from "../create-context";
import { authReducer, INITIAL_STATE } from "./auth.reducer";

const [state, dispatch, provider] = makeStore(authReducer, INITIAL_STATE);

export const authState = state;
export const authDispatch = dispatch;
export const AuthProvider = provider;
