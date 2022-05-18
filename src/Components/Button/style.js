import styled from "styled-components";

export const Container = styled.button`
  height: 48px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 24px;
  color: var(--text-white);
  width: ${(props) => props.width};
  background-color: ${(props) =>
    props.disableButton
      ? "var(--color-primary-disabled)"
      : props.submitButton
      ? "var(--color-primary)"
      : "var(--grey-1)"};
  border: 1px solid
    ${(props) =>
      props.disableButton
        ? "var(--color-primary-disabled)"
        : props.submitButton
        ? "var(--color-primary)"
        : "var(--grey-1)"};
  box-sizing: border-box;
  :hover {
    background-color: ${(props) =>
      props.disableButton
        ? "var(--color-primary-disabled)"
        : props.submitButton
        ? "var(--color-primary-hover)"
        : "var(--grey-2)"};
    border: 1px solid
      ${(props) =>
        props.disableButton
          ? "var(--color-primary-disabled)"
          : props.submitButton
          ? "var(--color-primary-hover)"
          : "var(--grey-2)"};
  }
`;

export default Container;
