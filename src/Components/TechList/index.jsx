import { Container, ListContainer, HeaderContainer } from "./style";
import TechCard from "../TechCard";
import { AiOutlinePlus } from "react-icons/ai";

const TechList = ({ setTechEdit, setAdd, technologies, setEdit }) => {
  return (
    <Container>
      <HeaderContainer>
        <h2>Tecnologias</h2>
        <button onClick={() => setAdd(true)}>
          <AiOutlinePlus />
        </button>
      </HeaderContainer>
      <ListContainer>
        <ul>
          {technologies.map((tech) => (
            <li key={tech.id}>
              <TechCard
                setTechEdit={setTechEdit}
                setEdit={setEdit}
                tech={tech}
              />
            </li>
          ))}
        </ul>
      </ListContainer>
    </Container>
  );
};

export default TechList;
