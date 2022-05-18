import { Container } from "./style";

const Header = ({ name, module }) => {
  return (
    <Container>
      <h1>{`Olá, ${name}`}</h1>
      <span>{module}</span>
    </Container>
  );
};

export default Header;
