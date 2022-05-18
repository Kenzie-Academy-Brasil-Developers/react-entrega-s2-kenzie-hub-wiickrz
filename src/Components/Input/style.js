import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: var(--grey-0);
  margin-top: 20px;

  label {
    font-size: 12px;
    color: var(--grey-0);
  }
`;

export const InputContainer = styled.input`
  display: flex;
  align-items: center;
  background-color: var(--grey-2);
  border: 1px solid var(--grey-2);
  box-sizing: border-box;
  width: 320px;
  height: 48px;
  padding: 0px 16px;
  margin-top: 20px;
  font-size: 16px;
  color: var(--grey-1);

  :focus {
    border: 1px solid var(--grey-0);
    color: var(--grey-0);
  }

  ::placeholder {
    color: var(--grey-1);
  }
`;
