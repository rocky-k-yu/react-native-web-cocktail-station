import { createStateContext } from '../shared/';

// Interface for reducer
export interface IState {
  isAuth: boolean;
  user: string;
}

// Interface for actions
export interface ILogout {
  type: "LOGOUT";
}

export interface ILogin {
  type: "LOGIN";
}

type Actions = ILogin | ILogout;

// Initial state
const initialState: IState = {
  isAuth: false,
  user: "Mike"
};

// Reducer
const reducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case "LOGOUT":
      return { ...state, isAuth: false, user: "No one" };
    case "LOGIN":
      return { ...state, isAuth: true, user: "Mike" };
  }
};

// Exposed store and provider
export const { Store, Provider } = createStateContext<IState, Actions>(reducer, initialState);