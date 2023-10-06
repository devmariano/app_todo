import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/AuthHook";
import { AuthService } from "../../services/AuthService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const { login } = useAuth();

  const onSubmit = async (data) => {
    await AuthService.Auth(data).then(async (response) => {
      const res = await response.json();

      if (response.status === 200) {
        login(res.data);
      }

      alert(res.message);
      reset();
    });
  };

  useEffect(() => {
    AuthService.Get() && navigate("/");
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="login">Login</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register("email", {
              required: "Campo de email e de preenchimento obrigatório",
            })}
          />
          {errors?.login && <p>{errors?.login?.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Campo de senha e de preenchimento obrigatório",
              minLength: {
                value: 8,
                message: "Campo senha deve possuir no minimo 8 caracteres",
              },
            })}
          />
          {errors?.pass && <p>{errors?.pass?.message}</p>}
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
