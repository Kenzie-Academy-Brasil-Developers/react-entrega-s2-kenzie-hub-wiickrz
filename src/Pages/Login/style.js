import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 15vh;
  width: 100vw;
  max-width: 360px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--grey-3);
  border-radius: 4px;
  width: 100%;
  margin-top: 30px;

  span {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: var(--grey-1);
    margin-top: 24px;
  }

  p {
    color: var(--negative);
    font-size: 12px;
  }

  button {
    margin-bottom: 50px;
  }

  h1 {
    color: var(--grey-0);
    font-weight: bolder;
    font-size: 18px;
    line-height: 28px;
    margin-top: 42px;
  }
`;
