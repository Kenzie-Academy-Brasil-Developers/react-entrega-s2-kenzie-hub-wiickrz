import { Container, ContainerForm } from "./style";
import { useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { kenzieHubApi } from "../../Services/api";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Header from "../../Components/NavBar";
import Select from "../../Components/Select";

const Register = () => {
  const history = useHistory();

  const registerSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório!"),
    email: yup
      .string()
      .required("E-mail é obrigatório!")
      .email("Email inválido!"),
    password: yup
      .string()
      .required("A senha é obrigatória!")
      .min(6, "Sua senha deve conter 6 digitos")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d#@$!%*?&]{6,}$/,
        "A senha deve conter 6 caracteres, letra maiúscula, minúscula, número e um especial pelo menos!"
      ),
    passwordConfirm: yup
      .string()
      .required("É necessário confirmar a senha")
      .oneOf([yup.ref("password")], "Senhas não conferem!"),
    course_module: yup.string().required("Selecione o módulo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = (data) => {
    const { course_module, name, email, password } = data;
    const user = {
      course_module,
      name,
      email,
      password,
      bio: " ",
      contact: " ",
    };
    console.log(user);
    kenzieHubApi
      .post("/users/", user)
      .then((_) => {
        toast.success("Conta criada!", { theme: "dark" });
        history.push("/");
      })
      .catch((err) => toast.error("Ops! Algo deu errado."));
  };

  if (localStorage.getItem("@KenzieHub:token")) {
    return <Redirect to={`/}`} />;
  }

  return (
    <Container>
      <Header />
      <ContainerForm>
        <h1>Crie sua conta</h1>
        <span>Rapido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(handleRegister)}>
          <Input
            register={register}
            name="name"
            placeholder="Insira seu nome completo"
            label="Nome"
            type="text"
          />
          <p>{errors.name?.message}</p>
          <Input
            register={register}
            name="email"
            placeholder="Insira seu melhor e-mail"
            label="Email"
            type="email"
          />
          <p>{errors.email?.message}</p>
          <Input
            register={register}
            name="password"
            placeholder="Insira a senha"
            label="Senha"
            type="password"
          />
          <p>{errors.password?.message}</p>
          <Input
            register={register}
            name="passwordConfirm"
            placeholder="Confirme a senha"
            label="Confirmar Senha"
            type="password"
          />
          <p>{errors.passwordConfirm?.message}</p>
          <Select
            register={register}
            name="course_module"
            label="Selecionar módulo"
          >
            <option value="Primeiro módulo (Introdução ao front-end)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Front-end avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao back-end)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Back-end avançado)">
              Quarto módulo
            </option>
          </Select>
          <Button
            disableButton={
              errors.email ||
              errors.password ||
              errors.name ||
              errors.passwordConfirm
            }
            submitButton
            width="100%"
            type="submit"
          >
            Cadastrar
          </Button>
        </form>
      </ContainerForm>
    </Container>
  );
};

export default Register;
