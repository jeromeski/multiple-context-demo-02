import { authReducer, UI_INITIAL_STATE } from "../ui/ui.reducer";
import makeStore from "../create-context";

const [state, dispatch, provider] = makeStore(authReducer, UI_INITIAL_STATE);

export const uiState = state;
export const uiDispatch = dispatch;
export const UIProvider = provider;
