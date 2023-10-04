import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthHook";

export const Header = () => {
  const { logout } = useAuth();

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/todo">Cadastar Tarefa</Link>

      <button onClick={logout}>Sair</button>
    </header>
  );
};
