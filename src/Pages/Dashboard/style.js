import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    width: 100%;
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
  }
`;

export const ContentContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 900px) {
    width: 70vw;
  }
`;
