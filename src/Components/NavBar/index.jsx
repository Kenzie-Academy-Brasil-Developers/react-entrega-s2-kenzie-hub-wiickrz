import { Container } from "./style";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../Logo";
import Button from "../Button";

const NavBar = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Container>
      <Logo />
      <Button
        onClick={() => {
          history.push("/");
          toast.error("Faça seu login!");
          // console.log(location.pathname);
          localStorage.clear();
        }}
      >
        {location.pathname === "/register" ? "Voltar" : "Sair"}
      </Button>
    </Container>
  );
};

export default NavBar;
