import styled from "styled-components";

export const Container = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    font-size: 18px;
    color: var(--grey-0);
  }
  span {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-1);
  }
`;
