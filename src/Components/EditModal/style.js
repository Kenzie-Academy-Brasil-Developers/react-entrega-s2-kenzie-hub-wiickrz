import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: var(--modal-background);
  position: fixed;
  display: flex;
  justify-content: center;
`;

export const Modal = styled.div`
  background-color: var(--grey-3);
  box-shadow: 0px 4px 40px -10px var(--modal-background);
  border-radius: 4px;
  width: 370px;
  height: 372px;
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100;
    max-width: 320px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  background-color: var(--grey-2);
  border-radius: 4px 4px 0px 0px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 700;
    font-size: 14px;
    color: var(--grey-0);
    margin-left: 20px;
  }

  p {
    font-family: "Nunito", sans-serif;
    color: var(--grey-1);
    font-size: 16px;
    font-weight: bold;
    line-height: 26px;
    margin-right: 12px;
    cursor: pointer;
  }
`;
