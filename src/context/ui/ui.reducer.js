export const UI_INITIAL_STATE = {
  searchTerm: "",
  isSticky: false,
  isSidebarSticky: true,
  isDrawerOpen: false
};

const SET_STICKY = "SET_STICKY";
const REMOVE_STICKY = "REMOVE_STICKY";
const SET_SIDEBAR_STICKY = "SET_SIDEBAR_STICKY";
const REMOVE_SIDEBAR_STICKY = "REMOVE_SIDEBAR_STICKY";
const TOGGLE_DRAWER = "TOGGLE_DRAWER";

export function uiReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload
      };
    case SET_STICKY:
      return {
        ...state,
        isSticky: true
      };
    case REMOVE_STICKY:
      return {
        ...state,
        isSticky: false
      };
    case SET_SIDEBAR_STICKY:
      return {
        ...state,
        isSidebarSticky: true
      };
    case REMOVE_SIDEBAR_STICKY:
      return {
        ...state,
        isSidebarSticky: false
      };
    case TOGGLE_DRAWER:
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen
      };
    default: {
      throw new Error(`Unsupported action type at UI Reducer`);
    }
  }
}

/* 
SET_STICKY
REMOVE_STICKY
SET_SIDEBAR_STICKY
REMOVE_SIDEBAR_STICKY
TOGGLE_DRAWER

*/
