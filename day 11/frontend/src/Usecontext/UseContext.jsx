import { createContext, useReducer } from "react";
let user = {
  userInfo: null,
};

export const LoginInfo = createContext();
let reducer = (state, action) => {
  switch (action.type) {
    case "setUserInfo":
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, user);

  return (
    <LoginInfo.Provider value={{ state, dispatch }}>
      {children}
    </LoginInfo.Provider>
  );
};
