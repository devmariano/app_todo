import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

//o nome do hook sempre começa com useNome
export const useAuth = () => {
    const { auth, user, setAuth, setUser} = useContext(AuthContext);

    const login = async (data) => {
        setAuth(true);
        setUser(data?.login);
    }

    const logout = () => {
        setAuth(false);
    }

    return{
        auth,
        user,
        login,
        logout,
    }
}
