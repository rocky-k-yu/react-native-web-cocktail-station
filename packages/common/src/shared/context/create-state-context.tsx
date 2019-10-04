import React, { Dispatch, useReducer } from "react";

/**
 * Inspired by https://dev.to/iamdammak/react-hook-usestate-with-react-context-api-3pco
 * Inspired by https://codesandbox.io/s/7jk69315l0
 * @param reducer 
 * @param initialState 
 */
function createStateContextImpl<IStateType, ActionsType>(reducer: any, initialState: any): any {

  interface IContextProps {
    state: IStateType;
    dispatch: Dispatch<ActionsType>;
  }

  const AdminStore = React.createContext({} as IContextProps);

  function AdminStoreProvider(props: any) {
    const [stateImpl, dispatch] = useReducer(reducer, initialState);

    const state = stateImpl as IStateType;
    const value = { state, dispatch };
    return (
      <AdminStore.Provider value={value}>{props.children}</AdminStore.Provider>
    );
  }
  return { Store: AdminStore, Provider: AdminStoreProvider };
}

export const createStateContext = createStateContextImpl;

export default createStateContextImpl;
