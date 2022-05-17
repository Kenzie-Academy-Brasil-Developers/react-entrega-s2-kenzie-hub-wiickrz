import { Container, Modal, Header } from "./style";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { kenzieHubApi } from "../../Services/api";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

const AddModal = ({ setAdd, token }) => {
  const addSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addSchema),
  });

  const handleAdd = (data) => {
    console.log(data);
    kenzieHubApi
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setAdd(false);
        toast.success("Tecnologia adicionada!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <Container>
      <Modal>
        <Header>
          <h3>Cadastrar tecnologia</h3>
          <p onClick={() => setAdd(false)}>X</p>
        </Header>
        <form onSubmit={handleSubmit(handleAdd)}>
          <Input
            label={"Tecnologia"}
            name={"title"}
            register={register}
            placeholder="Insira o nome da tecnologia"
          />
          <p>{errors.title?.message}</p>
          <Select register={register} name="status" label="Nível">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <Button
            disableButton={errors.title}
            type="submit"
            submitButton
            width="100%"
          >
            Cadastrar tecnologia
          </Button>
        </form>
      </Modal>
    </Container>
  );
};

export default AddModal;
