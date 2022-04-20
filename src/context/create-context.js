import React, { useContext, createContext, useReducer } from "react";

export function useCreateContext(reducer, initialState) {
  const defaultDispatch = () => initialState;
  console.log(defaultDispatch);
  const stateCtx = createContext();
  const dispatchCtx = createContext();

  function useStateCtx() {
    return useContext(stateCtx);
  }

  function useDispatchCtx() {
    return useContext(dispatchCtx);
  }

  function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>{props.children}</stateCtx.Provider>
      </dispatchCtx.Provider>
    );
  }

  return [useStateCtx, useDispatchCtx, StoreProvider];
}
