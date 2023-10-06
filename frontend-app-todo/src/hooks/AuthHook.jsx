import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/AuthService";

export const useAuth = () => {
  const navigate = useNavigate();

  const login = (data) => {
    AuthService.Set(data);
    navigate("/");
  };

  const user = () => {
    return jwt_decode(AuthService.Get());
  };

  return {
    login,
    user,
  };
};