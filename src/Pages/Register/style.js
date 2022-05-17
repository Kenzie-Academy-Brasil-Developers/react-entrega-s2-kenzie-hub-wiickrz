import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 370px;
`;

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  background-color: var(--grey-3);
  border-radius: 4px;
  width: 100%;

  h1 {
    color: var(--grey-0);
    font-weight: bolder;
    font-size: 18px;
    margin-top: 42px;
  }

  span {
    font-weight: bold;
    font-size: 12px;
    color: var(--grey-1);
    margin-top: 24px;
  }

  p {
    color: var(--negative);
    font-size: 12px;
    max-width: 300px;
  }

  div + button {
    margin-bottom: 30px;
  }
`;
