import { Container, InputContainer } from "./style";

const Input = ({ register, name, label, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer {...register(name)} {...rest} />
    </Container>
  );
};

export default Input;
