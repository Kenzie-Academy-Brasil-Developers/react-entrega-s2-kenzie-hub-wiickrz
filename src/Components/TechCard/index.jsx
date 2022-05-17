import { Container } from "./style";

const TechCard = ({ tech, setEdit, setTechEdit }) => {
  const { title, status } = tech;

  return (
    <Container
      onClick={() => {
        setTechEdit(tech);
        setEdit(true);
      }}
    >
      <h3>{title}</h3>
      <span>{status}</span>
    </Container>
  );
};

export default TechCard;
