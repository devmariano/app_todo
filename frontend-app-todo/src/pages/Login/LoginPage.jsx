import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

export const LoginPage = () => {
  const { handleSubmit, register, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    const body = {...data, login: data.login.replace(/[^\w]/g, '')}
    console.log(body);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="login">Login</label>
          <InputMask
            mask="999.999.999-99"
            id="login"
            placeholder="Digite seu login"
            {...register("login", {
              required: "Campo de login tem preenchimento obrigatório"
            })}
          />
          {errors?.login && <p>{errors?.login?.message}</p>}
        </div>
        <div>
          <label htmlFor="pass">Senha</label>
          <input type="password" id="pass" {...register("pass", {
              required: "Campo de senha tem preenchimento obrigatório",
              minLength: {
                value: 8,
                message: "Campo senha deve possuir no mínimo 8 caracteres"
              }
            })} />
            {errors?.pass && <p>{errors?.pass?.message}</p>}
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
