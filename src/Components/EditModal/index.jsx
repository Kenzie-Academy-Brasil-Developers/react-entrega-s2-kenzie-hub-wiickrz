import { Container, Modal, Header } from "./style";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { kenzieHubApi } from "../../Services/api";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

const EditModal = ({ setEdit, techEdit, token }) => {
  const { title, id } = techEdit;

  const editSchema = yup.object().shape({
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editSchema),
  });

  const handleEdit = ({ status }) => {
    const techStatus = { status };
    kenzieHubApi
      .put(`/users/techs/${id}`, techStatus, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setEdit(false);
        toast.success("Alteração realizada!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  const handleDelete = () => {
    kenzieHubApi
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setEdit(false);
        toast.success("Tecnologia deletada!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado.");
      });
  };

  return (
    <Container>
      <Modal>
        <Header>
          <h3>Tecnologia Detalhers</h3>
          <p onClick={() => setEdit(false)}>X</p>
        </Header>
        <form onSubmit={handleSubmit(handleEdit)}>
          <Input
            label={"Tecnologia"}
            name={"title"}
            register={register}
            placeholder={title}
            disabled
          />
          <Select register={register} name="status" label="Nível">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <Button type="submit" submitButton width="200px">
            Salvar alterações
          </Button>
          <Button type="button" onClick={handleDelete} width="100px">
            Excluir
          </Button>
        </form>
      </Modal>
    </Container>
  );
};

export default EditModal;
