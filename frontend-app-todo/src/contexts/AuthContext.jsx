import PropTypes from "prop-types";
import { createContext, useState } from "react";
// este estão os dados
export const AuthContext = createContext({
    auth: false,
    user: undefined,
    setAuth: () => {},
    setUser: () => {},
  });

//este prove os dados
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(undefined);
  
    return (
      <AuthContext.Provider value={{ auth, user, setAuth, setUser }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
