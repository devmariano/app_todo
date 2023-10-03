import {Link, Outlet} from "react-router-dom";

export const Layout = () => {
  return (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/todo">Cadastrar Tarefa</Link>
        </header>

        <main>{<Outlet/>}</main>

        <footer>
            <p>Desenvolvido por Alexandre Mariano</p>
        </footer>
    </div>
  )
}
