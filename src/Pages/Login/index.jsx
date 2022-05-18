import { Container, ContainerForm } from "./style";
import { useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { kenzieHubApi } from "../../Services/api";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Logo from "../../Components/Logo";

const Login = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Informe o e-mail").email("Email inválido"),
    password: yup.string().required("Insira sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleLogin = async (data) => {
    const response = await kenzieHubApi
      .post("/sessions/", data)
      .catch((err) => {
        toast.error("E-mail ou senha incorretos!");
      });

    const { user, token } = response.data;

    localStorage.setItem("@KenzieHub:token", token);
    localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

    toast.success("Você está logado!");

    history.push(`/home/${user.id}`);
  };

  if (localStorage.getItem("@KenzieHub:token")) {
    return (
      <Redirect
        to={`/home/${JSON.parse(localStorage.getItem("@KenzieHub:user")).id}`}
      />
    );
  }

  return (
    <Container>
      <Logo />
      <ContainerForm>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            register={register}
            name="email"
            label="E-mail"
            placeholder="E-mail"
          />
          <p>{errors.email?.message}</p>
          <Input
            register={register}
            name="password"
            label="Senha"
            placeholder="Senha"
            type="password"
          />
          <p>{errors.password?.message}</p>
          <Button
            disableButton={errors.email || errors.password}
            submitButton
            width="100%"
            type="submit"
          >
            Entrar
          </Button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <Button width="90%" onClick={() => history.push("/register")}>
          Cadastrar-se
        </Button>
      </ContainerForm>
    </Container>
  );
};

export default Login;
