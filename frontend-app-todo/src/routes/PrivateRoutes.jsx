import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AuthService } from "../services/AuthService";

export const PrivateRoutes = ({ children }) => {
  return AuthService.Get() ? children : <Navigate to="login" />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
