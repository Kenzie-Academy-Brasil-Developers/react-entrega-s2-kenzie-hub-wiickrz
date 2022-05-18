import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--grey-3);
  width: 100%;
  border-radius: 4px;

  li {
    list-style: none;
    width: 100%;
    margin: 10px 0px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0;
    width: 100%;
    margin: 0 8px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;

  h2 {
    font-weight: bold;
    font-size: 12px;
    color: var(--grey-0);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-3);
    color: var(--text-white);
    border: none;
    width: 32px;
    height: 32px;
    :hover {
      background-color: var(--grey-2);
    }
  }
`;
