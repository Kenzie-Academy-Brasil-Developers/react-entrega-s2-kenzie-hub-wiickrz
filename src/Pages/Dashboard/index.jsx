import { Container, ContentContainer } from "./style";
import { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { kenzieHubApi } from "../../Services/api";
import AddModal from "../../Components/AddModal";
import EditModal from "../../Components/EditModal";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import TechList from "../../Components/TechList";

const Dashbord = () => {
  const params = useParams();

  const [technologies, setTechnologies] = useState([]);
  const [name, setName] = useState("");
  const [module, setModule] = useState("");
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [techEdit, setTechEdit] = useState({});
  const [token] = useState(localStorage.getItem("@KenzieHub:token"));

  useEffect(() => {
    kenzieHubApi
      .get(`users/${params.user_id}`)
      .then((response) => response.data)
      .then((data) => {
        setTechnologies(data.techs);
        setName(data.name);
        setModule(data.course_module);
      })
      .catch((err) => console.log(err));
  });

  if (!localStorage.getItem("@KenzieHub:token")) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      {add && <AddModal setAdd={setAdd} token={token} />}
      {edit && (
        <EditModal setEdit={setEdit} techEdit={techEdit} token={token} />
      )}
      <ContentContainer>
        <NavBar />
      </ContentContainer>
      <hr />
      <ContentContainer>
        <Header name={name} module={module} />
      </ContentContainer>
      <hr />
      <ContentContainer>
        <TechList
          setTechEdit={setTechEdit}
          technologies={technologies}
          setEdit={setEdit}
          setAdd={setAdd}
        />
      </ContentContainer>
    </Container>
  );
};

export default Dashbord;
