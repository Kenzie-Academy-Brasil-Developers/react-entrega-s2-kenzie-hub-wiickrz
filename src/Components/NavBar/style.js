import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  margin-top: 50px;
  width: 100%;

  button {
    width: 68px;
    height: 32px;
    background-color: var(--grey-3);
    color: var(--grey-0);
    border: none;
    font-size: 12px;
    font-weight: bold;

    :hover {
      background-color: var(--grey-2);
    }
  }
`;
