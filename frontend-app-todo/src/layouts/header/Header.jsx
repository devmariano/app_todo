import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/AuthHook";

export const Header = () => {
  const { user } = useAuth();

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/todo">Cadastar Tarefa</Link>

      <h1>{user().email}</h1>
      <button>Sair</button>
    </header>
  );
};