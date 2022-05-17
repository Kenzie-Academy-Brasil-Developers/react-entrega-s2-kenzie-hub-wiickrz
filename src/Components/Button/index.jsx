import Container from "./style";

const Button = ({ children, submitButton, disableButton, width, ...rest }) => {
  return (
    <Container
      {...rest}
      submitButton={submitButton}
      disableButton={disableButton}
      width={width}
    >
      {children}
    </Container>
  );
};

export default Button;
