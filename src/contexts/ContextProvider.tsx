import React, { createContext, useContext, useState, ReactNode } from "react";


interface ContextType {
  user: {name:string};
  token: string | null;
  notification: string | null;
  setUser: React.Dispatch<React.SetStateAction<object | null>>;
  setToken: (token: string | null) => void;
  setNotification: (message: string | null) => void;
}


const StateContext = createContext<ContextType>({
  user: {name:""},
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
});


interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState<object | null>({name:'john'});
  const [token, _setToken] = useState<string | null>(null);
  const [notification, _setNotification] = useState<string | null>(null);

  const setToken = (token: string | null) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  const setNotification = (message: string | null) => {
    _setNotification(message);
    setTimeout(() => {
      _setNotification(null);
    }, 5000);
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        notification,
        setUser,
        setToken,
        setNotification,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};


export const useStateContext = () => useContext(StateContext);
