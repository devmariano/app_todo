import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthHook";

export const PrivateRoutes = ({ children }) => {
    const { auth } = useAuth();
    console.log(auth);

  return auth ? children : <Navigate to="login" />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
