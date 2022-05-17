import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey-4);
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;

  h3 {
    font-weight: 700;
    font-size: 14px;
    color: var(--grey-0);
    margin-left: 18px;
  }

  span {
    font-size: 12px;
    color: var(--grey-1);
    margin-right: 18px;
  }

  :hover {
    background-color: var(--grey-2);
  }
`;
