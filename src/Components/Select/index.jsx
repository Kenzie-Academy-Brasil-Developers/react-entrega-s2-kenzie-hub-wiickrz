import { Container, InputContainer } from "./style";

const Select = ({ register, name, label, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer {...register(name)} {...rest} />
    </Container>
  );
};

export default Select;
